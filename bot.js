const Discord = require('discord.js');
const client = new Discord.Client();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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
       if (scooter.id == 60) {
        author = "Dick Rules";
        } else if (scooter.id == 89 || scooter.id == 90 || scooter.id == 91) {
        author = "Unnamed Woman";
        } else {
        author = "H.P Baxxter";
        };
       var content = "**\"" + scooter.quote.text + "\"** \n\t\t- " + author + ", " + scooter.quote.track + " (" + scooter.quote.year + ")"
       message.channel.send(content);
       }
});


client.login(process.env.BOT_TOKEN);
