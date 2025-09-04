const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "OMdxzZCK#AIWrLyw0IlHjkviNYkUoZARLB0QqGP7OQNqEYG2JpE4",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/nsNpzrh/Blue-and-White-Modern-The-Future-Of-Artificial-Intelligence-You-Tube-Thumbnail.png",
ALIVE_MSG: process.env.ALIVE_MSG || "Hey, I'm OSADA MD , created by Osada Chamikara  ✨🍂

I'm always here for help you. 😇 Love you forever ♥️

> ⛓️‍💥 Find and share WhatsApp and Telegram links easily on Linkgic.site.",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
};
