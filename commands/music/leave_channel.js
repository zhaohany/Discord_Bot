const commando = require('discord.js-commando');


class LeaveChannelCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'leave',
            group: 'music',
            memberName:'leave',
            description:'Leave the voice channel'
        });
    }

    async run(message, args){
        if(message.member.voiceChannel){
            if(message.guild.voiceConnection){
                message.reply("我走啦！")
                message.guild.voiceConnection.disconnect();
            }else{
                message.reply("我还能往哪走？？？")
            }
        }else{
            message.reply("你在我的vc里才可以让我离开!")
        }
    }
}

module.exports = LeaveChannelCommand;