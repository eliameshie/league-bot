// Initializing Discord & Mongoose Schema
const Discord = require('discord.js');
const mongoose = require('mongoose');
const Match = require('../models/Matches.js')
require('dotenv').config();

// Some Variables for Embeds
const embedTitle = 'Nero League Commands';
const embedDesc = 'Useful Commands for Nero League';
const embedColor = '57467B';
const embedFooter = 'Developed by Nero Studios LLC';
const errorColor = 'D0CFEC';

// Our Commands We'll Have
const commands = 
`
!teams - Show teams registered.
`

// Embed for Errors & Confirmations
const errorEmbed100 = new Discord.RichEmbed()
	.setTitle('ERROR: E100')
	.setColor(errorColor)
	.setDescription("Couldn't find channel.")

const errorEmbed200 = new Discord.RichEmbed()
	.setTitle('ERROR: E200')
	.setColor(errorColor)
	.setDescription("Missing Arguments.")


module.exports = {
    name: 'match',
    description: "match",
    execute(message, args) {

const matchAddConfirmationEmbed = new Discord.RichEmbed()
	.setTitle('Match Successfully Added')
	.setColor(embedColor)
	.setDescription(`**${args[2]}** [${args[4]}] *vs.* **${args[3]}** [${args[5]}] `)



const matchChannel = message.guild.channels.find(channel => channel.name === 'matches')

if(!matchChannel) return message.reply(errorEmbed100);
mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true});
const match = new Match({
	_id: mongoose.Types.ObjectId(),
	team1: args[2],
	team2: args[3],
	t1score: args[4],
	t2score: args[5],
	datePlayed: message.createdAt
});

if(!args[2]) return message.reply(errorEmbed200)
if(!args[3]) return message.reply(errorEmbed200)
if(!args[4]) return message.reply(errorEmbed200)
if(!args[5]) return message.reply(errorEmbed200)

if(args[1] === 'add' && args[2].length > 0 && args[3].length > 0 && args[4].length > 0 && args[5].length > 0) {
	match.save()
	.then(matches => {
		matchChannel.send(matchAddConfirmationEmbed)
		console.log(matches)
	}).catch(err => {
		console.log(err)
	});

} else {
	message.reply(errorEmbed200)
}


    } 
}

