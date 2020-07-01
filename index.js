const discord = require ('discord.js');

var client = new discord.Client();
const ms = require('ms');
const token = ""
const emojiChannelID = '727510204635283487';

const prefix = "+";

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
        console.log(`User ID: ${message.author} + Message: ${message}`);
        
    }


////POLL +poll
if (msg.includes (prefix + "poll")) {
    let args=message.content.substring(prefix.length).split(" ");
    if (!message.member.hasPermission("ADMINISTRATOR")) return;
    switch(args[0]){

        case "poll":
            const Embed = new discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Easy Poll")
            .setDescription("Wrong Command Include Your Message!");
            console.log(`User ID: ${message.author}  Message: ${message}`);
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