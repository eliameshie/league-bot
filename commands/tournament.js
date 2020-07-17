// Intializing Discord and other Dependencies.
const Discord = require('discord.js');

// Variables for Embed
const embedTitle = 'Tournamnent';
const embedDesc = '*Valorant Tournamnent hosted by eli#3981*';
const embedColor = 'A6D8FF';
const embedFooter = 'Developed by Nero Studios LLC ';
const errorColor = '';

// Tournament Details
const tournament = 
`
**Format**: BO1
**Players**: 12 Players
**Prize**: $20 PayPal & 5$ OFF Coupon in our Shop!  
`

module.exports = {
    name: 'tournament',
    description: "tournament",
    execute(message, args) {

// Creating the help command.
  

const botCommands = message.guild.channels.find(channel => channel.name === 'bot-commands')


if (args[1] === 'help') {
    const tournamentHelpEmbed = new Discord.RichEmbed()
      .setTitle('')
      .setColor(embedColor)
      .setDescription('da')
      .addField('da', `da`)
      .addField('da', 'da')
      .setFooter(embedFooter);

  if(botCommands) {
  
  } else {
   message.channel.send(tournamentHelpEmbed)
  }
}




// Setting up a tournament in the database from Discord.


    if(message.member.roles.some(role => ['// Higher Staff'].includes(role.name))) {


      }
  }
}