//https://discordapp.com/api/oauth2/authorize?client_id=551488982345711616&scope=bot&permissions=8
const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const token = 'Your Token here'

bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('music','Music');
bot.registry.registerCommandsIn(__dirname+'/commands')
bot.registry.registerDefaults();



bot.on('message',function(message){
    if(message.content == '小言'){
        message.channel.sendMessage(message.author+'我在~');
    }
})

bot.on('ready',function(){
    console.log('Ready')
})

bot.login(token);
