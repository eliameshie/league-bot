// Initializing Discord and other Dependencies.
const Discord = require('discord.js');
const mysql = require('mysql');
const ms = require('ms');

// Variables for Embed
const embedTitle = 'Leaderboard';
const embedDesc = 'Top 10 Players.';
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC | eli#3981';
const errorColor = '';

// SQL Query Info & Connection FUTURE: Switch all over to .env
const host = 'electraleague.site.nfoservers.com';
const user = 'electral1';
const password = 'SDadsok1414Sz';
const database = 'electral1_playerstats';
const query = 'SELECT `name`, `score` FROM rankme ORDER BY `score` DESC LIMIT 10 '; 

const con = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database
})

module.exports = {
    name: 'leaderboard',
    description: "leaderboard",
    execute(message, args) {

    con.connect();

    con.query(query, (err, data) => {
      if(err) throw err;
      console.log(data);

    const queueEmbed = new Discord.RichEmbed()
      .setTitle(embedTitle)
      .setColor(embedColor)
      .setDescription(embedDesc)

    for(i = 0; i < data.length; i++)  {
      let name = data[i].name;
      queueEmbed.addField(`${i + 1}. ${name}`, 
      `${data[i].score}`)
    }

    queueEmbed.addField('Bugs', 'If you find any bugs, please contact a **Developer**.')
    queueEmbed.setFooter(embedFooter);
       
    message.channel.send(queueEmbed)
    }, ms(1498))

  } 
}

