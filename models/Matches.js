// Initializing Mongoose
const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	team1: String,
	team2: String,
	t1score: String,
	t2score: String,
	datePlayed: String
});

module.exports = mongoose.model('Match', MatchSchema)