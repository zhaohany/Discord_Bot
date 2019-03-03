const commando = require('discord.js-commando');
const fs = require('fs');
const ytdl = require('ytdl-core');


function connection(args,voiceChannel){
    const stream = ytdl(args, { filter: 'audioonly' });
    const dispatcher = connection.playStream(stream);
    dispatcher.on('end', () => {
      voiceChannel.leave();
    });
  }

class PlayMusicCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'play',
            group: 'music',
            memberName:'play',
            description:'Play Music'
        });
    }

    async run(message, args){
            if(message.guild.voiceConnection){
            message.reply("这就唱给你听！")
            message.reply("你想听的是："+args)
           connection(args,message.guild.voiceConnection)
    
            }else{
            message.reply("你必须在一个VC中我才能给你唱歌")
        }
    }
}

module.exports = PlayMusicCommand;