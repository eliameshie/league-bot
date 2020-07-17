// Initializing Discord
const Discord = require('discord.js');

// Some Variables for Embeds
const embedTitle = 'Scrim Manager';
const embedDesc = 'How to use the scrim command!';
const embedColor = '57467B';
const embedFooter = 'Developed by Nero Studios LLC';
const errorColor = 'D0CFEC';

// Our Commands We'll Have
const commands = 
`
!scrim - Base Command
!scrim help - Display How-To

When using the scrim command, make sure there is no spaces between in one single argument.
Ex: !scrim Nero ~~Esports~~ <- that is bad and will lead to an error.
Proper Usage: !scrim Nero Dust2,Mirage ESEA 7:45PM EST
- !scrim <TeamName> <Map(s)> <Platform> <Time> <Timezone>
`
// Embed for Errors & Confirmations
const errorEmbed100 = new Discord.RichEmbed()
	.setTitle('ERROR: NS100')
	.setColor(errorColor)
	.setDescription("Couldn't find channel.")

const errorEmbed200 = new Discord.RichEmbed()
	.setTitle('ERROR: NS200')
	.setColor(errorColor)
	.setDescription("Missing Arguments.")


const errorEmbed300 = new Discord.RichEmbed()
	.setTitle('ERROR: NS300')
	.setColor(errorColor)
	.setDescription("Wrong Channel.")

const errorEmbed400 = new Discord.RichEmbed()
	.setTitle('ERROR: NS400')
	.setColor(errorColor)
	.setDescription("Error creating channel. Channel already exists.")

// Embed for Normal Users
const scrimHelpEmbed = new Discord.RichEmbed()
	.setTitle(embedTitle)
	.setDescription(embedDesc)
	.setColor(embedColor)
	.addField('Scrim Commands', `${commands}`)
	.setFooter(embedFooter)




module.exports = {
    name: 'scrim',
    description: "scrim",
    execute(message, args) {



if(message.author.id === message.author.id) {
	message.delete()
}

const filter = (reaction, user) => {
  if (reaction.emoji.name === '✅' && user.id !== '725231008114409543' && user.id !== message.author.id ) {
    	message.author.send(`${user.tag} wants to scrim.`)
    return true;
    } else {
  	return false;
	}
}
let team = message.mentions.roles.first();
let map = args[2];
let platform = args[3]
let time = args[4] 
let timezone = args[5]

// Embed for Scrims
const scrimEmbed = new Discord.RichEmbed()
	.setTitle(`**${team}**`)
	.setDescription(`Looking for a scrim.`)
	.setColor(embedColor)
	.addField('Map', `${map}`, true)
	.addField('Platform', `${platform}`, true)
	.addField('Time', `${time} `+`${timezone}`, true)
	.setFooter(embedFooter)


    const scrimChannel = message.guild.channels.find(channel => channel.name === 'scrim');

if(args[1] === 'help') {
	return message.channel.send(scrimHelpEmbed)
}

if(args[1] === 'setup') {
	if(scrimChannel === scrimChannel) {
		message.guild.createChannel('scrim', 'text')
			.then(message => {
				message.channel.send(scrimHelpEmbed)
			})
			.catch(err => console.log(err))
	} else {
		message.reply(errorEmbed400)
	}
}

    if(args[1] !== 'help' && args[1] !== 'setup') {
    	if(scrimChannel){

    	scrimChannel.send(scrimEmbed)
    		.then(message => {
    			message.react('✅')
    		const collector = message.awaitReactions(filter, { max: 2, time: 86400000 })
    			.then(message => {
    				message.delete()
    			}).catch(err => {
    				console.log(err)
    			})


    		}).catch(err => {
    			console.log(err)
    		})




    	}
    } else {
    	return message.reply(errorEmbed300)
    }

    } 
}

