const commando = require('discord.js-commando');


class DiceRollCommand extends commando.Command{
    constructor(client){
        super(client,{
            name:'roll',
            group: 'simple',
            memberName:'roll',
            description:'Rolls a six sided dice'
        });
    }

    async run(message, args){
        var chance = Math.floor((Math.random()*6)+1);
        message.reply("你的筛子数是: "+chance);
    }
}

module.exports = DiceRollCommand;