const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("652521976937709568")
setInterval(function() {
channel.send(`Terms of service in our server

 Since you have purchased one of our products before, you agree to the terms of service


 What are the conditions of service?


 Terms of service:

 # You are confident in your dealings with us

 # There is a 3-hour warranty on our products

 # Receive the card before work starts

 # Thank you for your cooperation with us .Terms of service in our server

 Since you have purchased one of our products before, you agree to the terms of service


 What are the conditions of service?


 Terms of service:

 # You are confident in your dealings with us

 # There is a 3-hour warranty on our products

 # Receive the card before work starts

 # Thank you for your cooperation with us .`);
}, 30)
})

client.login(process.env.BOT_TOKEN);