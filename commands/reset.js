const Discord = require('discord.js')
const colors = require('../colors.json')
const client = require('../index.js')
const db = require('quick.db')
const moment = require('moment');
const moment2 = require('moment-duration-format')
const config = require('../config.json')
const perms = require('../permissions.json');
const t3amim = require('./t3amim');
var voiceChannel = null;


module.exports = {
    name: 'reset',
    description: 'لتصفير تعاميم شخص معين',
    aliases: ['تصفير', 'ريسيت'],
    usage: "`+تصفير @منشن`",
    category: 'Owners',
    guildOnly: true,
    cooldown: 5,
    async execute(message, args){
        if(message.member.roles.cache.some(r=>["One",".Two","Developer",'∞'].includes(r.name)) ) {
            let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
            let noUser = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setDescription('منشن الشخص اولا')

                
            if (!User) return message.channel.send(noUser)
            let t3amim = await db.get(`t3mimMember_${User.id}`);

            if(t3amim === null || t3amim === 0) return message.channel.send(new Discord.MessageEmbed().setColor(colors.gold).setDescription('** لاتوجد تعاميم سابقة ** <a:redxcheck:757804579286024364>'));
            //if(t3mimMember === null) return message.channel.send(` لايوجد تعاميم لتصفيرها`);


            db.delete(`t3mimMember_${User.id}`);
            message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription('** تم التصفير بنجاح ** <a:Connected:720218112238288946>'));
                            
            
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
