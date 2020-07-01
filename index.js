const discord = require ('discord.js');

var client = new discord.Client();
const ms = require('ms');
const token = "NzI3Njk4NTg0MjQxNDM4ODIx.XvvpXQ.rdxXwlrjx10N_zFgiwG0M52M2ZY"
const emojiChannelID = '727510204635283487';

const prefix = "+";


//Anti Spam

const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 8000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
 
 
client.on('message', (message) => antiSpam.message(message)); 


// BOT STATUS
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}.`);
    client.user.setActivity('All Your Polls', {type: "WATCHING"}).catch(console.error);

});

//PREFIX AND HELLO +hello

client.on("message",(message) => {


    if (message.author.bot) return;
    
    msg = message.content.toLowerCase();
    
    if (msg.startsWith (prefix + "hello")) {
        message.reply ('Hi!');
        
    }


////POLL +poll
if (msg.includes (prefix + "poll")) {
    let args=message.content.substring(prefix.length).split(" ");
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    switch(args[0]){

        case "poll":
            const Embed = new discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Genenrate Poll")
            .setDescription("Wrong Command");

            if(!args[1]){
                message.channel.send(Embed);
                break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("📋 " + "**" + msgArgs + "**").then(messageRecation => {
                messageRecation.react("👍");
                messageRecation.react("👎");
                message.delete();
            });

        break;
  }  }
});

client.login (token);