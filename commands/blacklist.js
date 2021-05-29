const Discord = require('discord.js')
const colors = require('../colors.json')
const client = require('../index.js')
const db = require('quick.db')
const config = require('../config.json')
const checkperm = require('../permissions.json')

module.exports = {
    name: 'blacklist',
    description: 'Blacklists a user',
    aliases: ['بلوك', 'منع'],
    usage: 'blacklist <user>',
    required: 'DEVELOPER',
    category: 'Developer',
    guildOnly: true,
    async execute(message, args) {
        if(message.member.roles.cache.some(r=>["One",".Two","Developer",'∞'].includes(r.name)) ) {
        let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
            let bReason = args.join(" ").slice(32)
            let noUser = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setDescription('**منشن الشخص اولا**')
                .addField("Usage:", '`blacklist <user> [reason]`')

            if (!User) return message.channel.send(noUser)

            let checkingBlacklisted = db.fetch(`blacklisted_${User.id}`)

            if (!bReason) bReason = 'No reason defined'
            db.set(`blacklistMember_${User.id}`, true)
            let blacklistedEmbed = new Discord.MessageEmbed()
                .setDescription('تم المنع بنجاح **' + `<@!${User}>` + '**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.green)
                .addField('السبب:', bReason)

            message.channel.send(blacklistedEmbed)
            if(checkingBlacklisted == true){
                let alreadyBlacklisted = new Discord.MessageEmbed()
                .setDescription('** هذا الشخص موجود بقائمة البلاك ليست فعلا **')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            return message.channel.send(alreadyBlacklisted)
            }
            
        } else {
            let cannotUse = new Discord.MessageEmbed()
                .setDescription('**لاتملك الرول لاستخدام الأمر.**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
            message.channel.send(cannotUse)
        }
    }
}
