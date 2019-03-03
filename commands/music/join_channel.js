const commando = require('discord.js-commando');
const fs = require('fs');
const ytdl = require('ytdl-core');

class JoinChannelCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'join',
            group: 'music',
            memberName:'join',
            description:'Join the voice channel'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                 .then(connection =>{
                    message.reply("我来啦！");
                    const stream = ytdl(args, { filter: 'audioonly' });
                    const dispatcher = connection.playStream(stream);
                    dispatcher.on('end', () => {
                    message.member.voiceChannel.leave();
        });
                })
            }
        }else{
            message.reply("你必须在一个VC中我才能给你唱歌")
        }
    }
}

module.exports = JoinChannelCommand;