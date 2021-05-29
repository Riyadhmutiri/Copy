const Discord = require('discord.js')
const colors = require('../colors.json')
const client = require('../index.js')
const db = require('quick.db')
const moment = require('moment');
const moment2 = require('moment-duration-format')
const config = require('../config.json')
const perms = require('../permissions.json');


module.exports = {
    name: 't3mim',
    description: 'للتعميم عن شخص معين في الروم الصوتي',
    aliases: ['تعميم', 'التعميم', 't3m'],
    usage: "`تعميم @منشن السبب`",
    category: 'Admins',
    guildOnly: true,
    cooldown: 5,
    async execute(message, args){
        const  voiceChannel = null;
        if(message.member.roles.cache.some(r=>["*", "Developer",'Staff'].includes(r.name)) ) {
            let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase().includes() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase().includes() === args.join(' ').toLocaleLowerCase())
            let bReason = message.content.split(" ").slice(2).join(" ");
            let noUser = new Discord.MessageEmbed()
                .setColor(colors.blue)
                .setDescription('منشن الشخص اولا')

                let noreson = new Discord.MessageEmbed()
                .setColor(colors.blue)
                .setDescription('يرجى ذكر السبب بعد المنشن')

                


            if (!User) return message.channel.send(noUser)
            if(message.author.id == User) return message.channel.send(new Discord.MessageEmbed().setColor(colors.gold).setDescription('** لايمكنك استخدام الامر على نفسك **'));
            if (!bReason) return message.channel.send(noreson)
            

            
         
            let newt3mim = db.get(`t3mimMember_${User.id}`);
            if(newt3mim === 6) return message.channel.send(new Discord.MessageEmbed().setColor(colors.gold).setDescription('** هذا الشخص لديه اكثر من ست تعاميم ** <a:redxcheck:757804579286024364>'));


            
      
    
            let rw = User.voice.channel
            
            if (!rw) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription('** يجب ان يكون الشخص في روم صوتي **'));
             rw.updateOverwrite(User.id, {
                CONNECT:false
              })

              
              User.voice.setChannel(null);
              const t3mtime = moment().format('YY-MM-DD, h:mm:ss a');
              let Embedd = new Discord.MessageEmbed()
              .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
              .setColor("RED")
              .setTitle('تعميم - بلاغ جديد')
              .addField('> ** المستبعد **', ` <@${User.id}> `)
              .addField('> ** بواسطة **', `<@${message.author.id}>`)
              .addField('> ** في روم **', `<#${rw.id}>`, true)
              .addField('> ** السبب **', `\`${bReason}\``, true)
              .addField('> ** وقت التعميم **', `\`${t3mtime}\``)
              .setTimestamp(new Date())
              .setFooter(`X_HuN`,'https://cdn.discordapp.com/attachments/788708484346413066/793437908504936478/41fc742b8ad7623d124a1e96a3deed5c.png')
              if(newt3mim === null) {
                db.set(`t3mimMember_${User.id}`, 1);
                message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription('** تم ارسال التعميم بنجاح ** <a:Connected:720218112238288946>'));
                    }
                    if(newt3mim !== null) {
                        db.add(`t3mimMember_${User.id}`, 1);
                        message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription('** تم ارسال التعميم بنجاح ** <a:Connected:720218112238288946>'));
                            } 
                    message.client.channels.cache.get("790268430599192576").send(Embedd).then((msg) => msg.react("793436046306181150"));
                    message.client.channels.cache.get("775096451972726794").send(Embedd).catch(console.error);
            
        } else {
            let cannotUse = new Discord.MessageEmbed()
                .setDescription('**لاتملك الرول لاستخدام الأمر.**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(cannotUse)
        }
    } 
}
