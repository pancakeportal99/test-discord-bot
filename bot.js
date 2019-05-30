const Discord = require('discord.js');
const client = new Discord.Client();
const XMLHttpRequest = require("xhr2");
function getWebsite(e) {
    var t = new XMLHttpRequest;
    return t.open("GET", e, !1), t.send(), t.responseText
}
client.on('ready', () => {
    console.log('I am ready!');
    
});


client.on('message', message => {
    if (message.content === '!quote') {
       var scooter = JSON.parse(getWebsite("https://howmuchisthe.fish/json/random"));
       var content = "**\"" + scooter.quote.text + "\"** \n\t\t- H.P Baxxter, " + scooter.quote.track + " (" + scooter.quote.year + ")"
       message.channel.send(content);
       }
});


client.login(process.env.BOT_TOKEN);
