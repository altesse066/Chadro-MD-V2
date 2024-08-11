const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
Alive_: process.env.ALIVE_IMG || "https://telegra.ph/file/8c3bfe16e2510936e8420.jpg"
Alive_MSG processe.ent.ALIVE_MSG || "bonjour je m'appeelle Je suis vivant ".
};
