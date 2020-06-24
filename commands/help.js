// Initializing Discord
const Discord = require('discord.js');

// Some Variables for Embeds
const embedTitle = 'Nero League Commands';
const embedDesc = 'Useful Commands for Nero League';
const embedCOlor = '57467B';
const embedFooter = '- Developed by Nero Studios LLC';
const errorColor = 'D0CFEC';

// Our Commands We'll Have
const commands = 
`
!teams - Show teams registered.
`

// Embed for Normal Users
const helpEmbed = new Discord.RichEmbed()
	.setTitle(embedTitle)
	.setDescription(embedDesc)
	.setColor(embedColor)
	.addField('Server Commands', `${commands}`)
	.setFooter(embedFooter)

// Embed for Staff Members [Moderator +]
const helpEmbedStaff = new Discord.RichEmbed()
	.setTitle(embedTitle)
	.setDescription(embedDesc)
	.setColor(embedColor)
	.addField('Server Commands', `${commands}`)
	.setFooter(embedFooter)

module.exports = {
    name: 'help',
    description: "help",
    execute(message, args) {

    if(message.member.roles.some(role => 
    	['Nero'].includes(role.name))) {
    		message.channel.send(helpEmbed)
    } else {
    	message.channel.send(helpEmbedStaff)	
    }
    


    } 
}

