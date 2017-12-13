const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    password: String,
    email: String,
    xp: {
        current: { type: Number, default: 10 },
        goal: {type: Number, default: 100 }
    },
    level: { type: Number, default: 3 },
    timesTested: { type: Number, default: 1 },
    timesCorrect: { type: Number, default: 1 },
    stats: { type: Array, default: [] }
})

UserSchema.statics.new = (name, password, email, stats) => {
    let record = new User({
        name: name,
        password: password,
        email: email,
        stats: stats
    });
    record.save(err => err ? err : console.log('inserted user'));
}

// Users defined here as setting UserSchema > add method will fail
const User = mongoose.model('Users', UserSchema);
module.exports = User;
