const {
	PREFIX
} = require('../config.json');
const Discord = require('discord.js')
const { Menu } = require('discord.js-menu');
const colors = require('../colors.json')
const client = require('../index.js')
const {
	Collection
} = require('discord.js')

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	category: 'Utility',
	usage: 'help [command]',
	cooldown: 5,
	execute(message, args) {


let helpMenu = new Menu(message.channel, message.author.id, [
    {
        name: 'main',
        content: new Discord.MessageEmbed()
        .setTitle('بوت التعاميم')
        .setDescription(`

          \`・・・・・・・・・・・・・・・・・・ \`
        
**        I  [+] البرفكس الخاص بالبوت هو **
**        I  برمجة خاصة لإدارة سيرفر فيجن فقط**
**        I  [ R.....#7110 ] تم برمجة البوت بواسطة : **

          \`・・・・・・・・・・・・・・・・・・ \`

        
        `)
        .setFooter('Page 1/3')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new Discord.MessageEmbed()
        .setTitle('Commande | الأوامر')
       .setDescription(`

**        I الأوامر الخاصه بالبوت :**
                   
          \`・・・・・・・・・・・・・・・・・・ \`
                   
      ** I لاستبعاد شخص من الروم الصوتي من قبل الإداري المسؤول فقط **
      \` I + تعميم, t3mim, t3m \`
      ** I لعرض التعاميم الخاصة ب عضو معين او الخاصة بك **
      \`  I + t3amim, تعاميم, t3am \`
      **  I لتصفير تعاميم شخص معين او تصفير تعاميمك **
      \`  I + reset, تصفير, ret3m \`
      **  I لمنع إداري من استخدام أوامر البوت **
      \`  I + blacklist, منع, blist \`
      **  I لاعفاء إداري من استخدام أوامر البوت **
      \`  I + whilelist, سماح, wlist \`

          \`・・・・・・・・・・・・・・・・・・ \`
        
                `)
        .setFooter('Page 2/3')
        ,
        reactions:{  
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new Discord.MessageEmbed()
        .setTitle('X_HuN Links')
        .setDescription(`
        \`・・・・・・・・・・・・・・・・・・\`
        ** تحياتي لكم وحياكم الله  **
        \`・・・・・・・・・・・・・・・・・・\`
        
        `)
        .setFooter('Page 3/3')
        ,
        reactions:{  
        '◀': 'previous'
    }
    },
    ], 300000)
        helpMenu.start()

	},

};
