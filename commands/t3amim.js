const Discord = require('discord.js')
const colors = require('../colors.json')
const client = require('../index.js')
const db = require('quick.db')
const ms = require('ms')

module.exports = {
    name: 't3amim',
    description: 'لعرض تعاميم شخص معين',
    aliases: ['تعاميم', 'تعاميمي'],
    usage: "`تعاميم @منشن`",
    category: 'ALL',
    guildOnly: true,
    cooldown: 220,
    async execute(message, args){
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
        let noUser = new Discord.MessageEmbed()
            .setColor(colors.blue)

        let t3amim = await db.get(`t3mimMember_${User.id}`);

        if(t3amim === null || t3amim === 0) return message.channel.send(new Discord.MessageEmbed().setColor(colors.blue).setDescription('** لاتوجد تعاميم سابقة ** <a:redxcheck:757804579286024364>'));


        message.channel.send(new Discord.MessageEmbed().setColor(colors.blue).setDescription(`> ** عدد التعاميم ** \n \`[ ${t3amim} ]\` 📡 `).setFooter(`Dev: Riyadh`,`https://cdn.discordapp.com/attachments/742423504741335160/763668403310428170/auWd5b95AV.png`)
        );
    }
}
