require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const fs = require('fs');
const PREFIX = '!'
const version = '1.0.1'


// Queue Bot 
// 


const nero = '723004057094193222';
const color = '1478FF'; 



// Command Handler
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");




    switch (args[0]) {

        case "help":
            bot.commands.get('help').execute(message, args);
        break;






    }
 
});
 




bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}! Running Version: v.${version}`);
  bot.user.setActivity('Hosting Nero League')
});


