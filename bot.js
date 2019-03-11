const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";

client.on('message',async function(message) {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  let editRole = message.mentions.roles.first();
  let args = message.content.split(' ');
  let color = args[2];
  let black = '#1c1b1b',
      white = '#ffffff',
      lime = '#02e048',
      blue = '#02def2',
      purple = '#cb00ff',
      pink = '#ff0077',
      red = '#ff0000',
      orange = '#ffae00',
      milky = '#005dff',
      darkgreen = '#2a8942',
      darkblue = '#2a1151',
      darkpurple = '#50114b',
      darkpink = '#99038d',
      darkred = '#990303',
      darkorange = '#996103'
  if(message.content.startsWith(prefix + "setcolor")) {
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.channel.send(`**:heavy_multiplication_x: | ليس لديك الصلاحيات الكافية**`);
    if(!message.guild.me.hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.channel.send(`**:heavy_multiplication_x: | ليس لدي الصلاحيات لفعل هذا**`);
    if(!editRole) return message.channel.send(`**منشن رتبة لتـغير لونها **`);
    if(!args[2]) {
      let codes = [black, white, lime, blue, purple, pink, red, orange, milky, darkgreen, darkblue, darkpurple, darkpink, darkred, darkorange];
      let colors = new Discord.RichEmbed()
      .setTitle(`Role Colors: \`${message.guild.name}\``)
      .setColor(codes[Math.floor(Math.random() * codes.length)])
      .setFooter(client.user.username)
      .setTimestamp()
.setDescription(`\nBlack: \`${black}\`\n\nWhite: \`${white}\`\n\nLime: \`${lime}\`\n\nBlue: \`${blue}\`\n\nPurple: \`${purple}\`\n\nPink: \`${pink}\`\n\nRed: \`${red}\`\n\nOrange: \`${orange}\`\n\nMilky: \`${milky}\`
\nDarkGreen: \`${darkgreen}\`\n\nDarkBlue: \`${darkblue}\`\n\nDarkPurple: \`${darkpurple}\`\n\nDarkPink: \`${darkpink}\`\n\nDarkRed: \`${darkred}\`\n\nDarkOrange: \`${darkorange}\`\n`);
      return message.channel.send(colors);
    }

    if(args[2] && color === 'white') {
      editRole.edit({color: white}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      });
    }
    if(args[2] && color === 'black') {
      editRole.edit({color: black}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      });
    }
    if(args[2] && color === 'lime') {
      editRole.edit({color: lime}).then(function(done, err) {
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'blue') {
      editRole.edit({color: blue}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'purple') {
      editRole.edit({color: purple}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
  if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'pink') {
      editRole.edit({color: pink}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'red') {
      editRole.edit({color: red}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'orange') {
      editRole.edit({color: orange}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'milky') {
      editRole.edit({color: milky}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | Error**`));
    }
    if(args[2] && color === 'darkgreen') {
      editRole.edit({color: darkgreen}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkblue') {
      editRole.edit({color: darkblue}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkred') {
      editRole.edit({color: darkred}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkpink') {
      editRole.edit({color: darkpink}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkpurple') {
      editRole.edit({color: darkpurple}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
    if(args[2] && color === 'darkorange') {
      editRole.edit({color: darkorange}).then(function(done, err) {
        if(err) return message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`);
        if(!err) return message.channel.send(`**:ballot_box_with_check: | تم تغير لون الرتبة**`);
      }).catch(e => message.channel.send(`**:heavy_multiplication_x: | يوجد خطأ !**`));
    }
  }
});



const fs = require('fs');
const ms = require('ms');
const moment = require('moment');
var cds = new Set();
var cdv = new Set();
 const auto = require('./autoMessage.json');
client.on('message',async message => {
    var msg;
    var resp;
    var filter = m => m.author.id === message.author.id;
    if(message.content.startsWith(prefix + "replay")) {
      if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`:heavy_multiplication_x: **You dont have permissions**`);
      message.channel.send(`:eight_pointed_black_star:| **اكتب الرسالة**`).then(m => {
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ['time']
        }).then(collected => {
          msg = collected.first().content;
          collected.first().delete();
          message.delete();
          m.edit(`:eight_pointed_black_star:| **اكتب الرد**`).then(() => {
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 20000,
              errors: ['time']
            }).then(collected => {
              resp = collected.first().content;
              collected.first().delete();
              message.delete();
              m.edit(`:eight_pointed_black_star:| **Auto Replay Activated**`);
              var autoM = new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
              .setThumbnail(message.author.avatarURL)
              .setTitle(`:white_check_mark:| **Changed the replay!**`)
              .addField('❯ Message',msg,true)
              .addField('❯ Replay',resp,true)
              .setFooter(`${message.author.tag} :: ${moment().format('MMM.Do.YY')}`);
              message.channel.send(autoM);
              auto[message.guild.id] = {
                msg: msg,
                resp: resp
              };
              fs.writeFile('./autoMessage.json', JSON.stringify(auto, null, 4), (e) => {
                if(e) console.log(e);
              });
            });
          });
        });
      });
    } else if(message.content.startsWith(auto[message.guild.id].msg)) {
      message.channel.send(auto[message.guild.id].resp);
    }
  });


var cooldown = new Set();
var points = {};
client.on('message', async message => {
	if(message.channel.type !== 'text') return;
	
	
	var command = message.content.toLowerCase().split(" ")[0];
	var args = message.content.toLowerCase().split(" ");
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id == args[1]));
	  const embed  = new Discord.RichEmbed()
.setDescription(`
**لم يتم تسجيل أي نقطة حتى الأن **
** أمثلة للأوامر: **
**:small_orange_diamond:** $points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** $points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** $points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** $points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** $points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
  const error  = new Discord.RichEmbed()
.setDescription(`
**:x: | يجب كتابة الأمر بشكل صحيح. **
** أمثلة للأوامر: **
**:small_orange_diamond:** $points ${message.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** $points ${message.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** $points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** $points ${message.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** $points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)
if(command == prefix + 'points') {
	 
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!args[1]) {
			if(!points) return message.channel.send(embed);
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return message.channel.send(embed);
			var x = 1;
			let pointsTop = new Discord.RichEmbed()
			.setAuthor('Points:')
			.setColor('#FBFBFB')
			.setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**:small_blue_diamond:** <@${m.id}> \`${m.points}\``).join('\n'))
			.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
			message.channel.send({
				embed: pointsTop
			});
		}else if(args[1] == 'reset') {
			let pointsReset = new Discord.RichEmbed()
			.setDescription('**:white_check_mark: | تم تصفير جميع النقاظ بنجاح**')
			.setFooter('Requested by '+message.author.username, message.author.avatarURL)
			if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
			if(!points) return message.channel.send(pointsReset);
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return message.channel.send(pointsReset);
			points = {};
			message.channel.send(pointsReset);
		}else if(userM) {
			if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
			if(!points[userM.user.id]) points[userM.user.id] = {
				points: 0,
				id: userM.user.id
			};
			if(!args[2]) {
				if(points[userM.user.id].points == 0) return err(message, `${userM.user.username} Not have any points.`);
				var userPoints = new Discord.RichEmbed()
				.setColor('#d3c325')
				.setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
				message.channel.send({
					embed: userPoints
				});
			}else if(args[2] == 'reset') {
				if(points[userM.user.id].points == 0) return message.channel.send(error);
				points[userM.user.id].points = 0;
				message.channel.send(`Successfully reset ${userM.user.username} points.`);
			}else if(args[2].startsWith('+')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 1000000) return message.channel.send(error);
				if(!args[2]) return message.channel.send(error);
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
				points[userM.user.id].points += args[2];
				let add = new Discord.RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(add);
			}else if(args[2].startsWith('-')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 0) return message.channel.send(error);
				if(!args[2]) return message.channel.send(error);
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
				points[userM.user.id].points -= args[2];
					let rem = new Discord.RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(rem);
			}else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
				args[2] = parseInt(Math.floor(args[2]));
				if(isNaN(args[2])) return message.channel.send(error);
				if(args[2] > 1000000) return message.channel.send(error);
				if(args[2] < 1) return message.channel.send(error);
				if(points[userM.user.id].points == args[2]) return err(message, `${userM.user.username} points is already ${args[2]}.`);
				points[userM.user.id].points = args[2];
					let set = new Discord.RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + message.author.username, message.author.avatarURL)
				message.channel.send(set);
			}
			}
			}
});

let vipKeys = JSON.parse(fs.readFileSync("./vipKeys.json", "utf8"));
client.on("message", msg=>{
let id = "462038057529507841"; // ايديك
let role = "V.I.P"; // اسم رتبة الفيب
let Price = 1500; // السعر
let Price2 = Math.floor(Price-(Price*(1/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
let embedvip = new Discord.RichEmbed()
.setColor("#42f4f4")
.setAuthor(msg.author.username, msg.author.displayAvatarURL)
.setThumbnail(msg.author.avatarURL)
.setTitle("**اختر الطريقة المناسبة لك**")
.addField("ل شراء الفي اي بي لنفسك","🔱",true )
.addField("ل شراء الفي اي بي ك هدية","🎁",true)
.setTimestamp()
.setFooter(client.user.username,client.user.displayAvatarURL);
msg.channel.send(embedvip).then(msgs2 =>{
msgs2.react("🔱").then(()=>{
  msgs2.react("🎁").then(()=>{
    const me = (reaction, user) => reaction.emoji.name === '🔱' && user.id === msg.author.id;
    const gift = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id;
    const mec = msgs2.createReactionCollector(me, {time: 120000});
    const giftc = msgs2.createReactionCollector(gift, {time: 120000});
mec.on("collect", r=>{  
msgs2.delete()
if(msg.member.roles.find(r=>r.name == role)) return msg.reply("انت تمتلك الرتبة مسبقًا");
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
msg.reply(`تم اعطائك رتبة \`${role}\``);
msg.member.addRole(roleW);
}).catch(e => {});
})})
giftc.on("collect", r=>{
  msgs2.delete()
  let roleW = msg.guild.roles.find(r=>r.name == role);
  if(!roleW) return msg.reply(`البوت مقفل لعدم وجود رتبة ب أسم \`${role}\``)
msg.channel.send(`كردت بروبوت\`${Price}\` لديك 4 دقائق لتحويل
إلى ${msg.guild.members.get(id)}
`).then( msgs =>{
  const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
  msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  msgs.delete()
  genKey(msg,roleW);
  }).catch(e => {});
  })
})
})})})
///
}
if(cmd === `${prefix}use`){
  let args = msg.content.split(" ").slice(1)[0];
  if(!args) {   
    let embed = new Discord.RichEmbed()
    .setColor("#42f4f4")
    .setTitle(`:x: - **الرجاء ادخال كود الهدية** \`${prefix}used <Key>\``)
    msg.reply(embed).then( z => z.delete(3000));
    return
}
  let embed = new Discord.RichEmbed()
.setTitle(`**جاري التحقق من الكود**`)
.setColor("#42f4f4")
  msg.reply(embed).then( msgs =>{
  if(vipKeys[args]){
    let hav = msg.member.roles.find(`name`, vipKeys[args].name);
    if(hav){
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **انت تمتلك هذه الرتبة مسبقًا**  \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    return
    }
    let embed = new Discord.RichEmbed()
    .setTitle(`:tada: - **مبروك تم اعطائك رتبة** \`${vipKeys[args].name}\``)
    .setColor("#42f4f4")
    msgs.edit(embed)
    msg.member.addRole(vipKeys[args]);
    delete vipKeys[args]
    save()
  }else{
    let embed = new Discord.RichEmbed()
    .setTitle(`:x: - **الكود غير صيحيح أو انه مستعمل من قبل**`)
    .setColor("#42f4f4")
    msgs.edit(embed)
  }});
}
});

function genKey(msg,role){
  var randomkeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var gift = "";
  for (var y = 0; y < 16; y++) {   ///16
    gift +=  `${randomkeys.charAt(Math.floor(Math.random() * randomkeys.length))}`;
  }
  vipKeys[gift] = role;
  let embed = new Discord.RichEmbed()
  .setColor("#42f4f4")
  .setTitle(`:ok_hand: - **تم ارسآل الكود على الخاص**`);
  msg.reply(embed);
  let embed2= new Discord.RichEmbed()
  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
  .setThumbnail(msg.author.avatarURL)
  .addField("**Key Of Gift**", gift,true)
  .addField("Role",vipKeys[gift].name,true)
  .addField("This Key Made by", msg.author, true)
  .addField("The Room", msg.channel , true)
  .setTimestamp()
  .setFooter(client.user.username,client.user.displayAvatarURL)  
  msg.author.send(embed2);
  save()
}

function save(){
  fs.writeFile("./vipKeys.json", JSON.stringify(vipKeys), (err) => {
    if (err) console.log(err)
  });

}



const fs = require("fs");
let client = bot;
bot.codes = require("./code.json")
bot.on(`ready`, () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setStatus("online")
});
bot.on("guildMemberAdd", (member) => { //هذي يوم يستنى الشخص يدخل السيرفر عشان يعطيه الرتبة
  console.log(member.user.username + " Joined " + member.guild.name);
  if (bot.codes[member.guild.id] === undefined) return console.log("Use the setrole command")
  let role = bot.codes[member.guild.id].role
  let roletogive = member.guild.roles.get(`${role}`);
  if (!roletogive) return console.log(`please use ${prefix}setrole ROLEMENTION or make sure that the bot role is higher than the auto role`)
  bot.guilds.get(`${bot.codes[member.guild.id].guild}`).member(member).addRole(roletogive);
  let Hello = bot.codes[member.guild.id].message
  if (Hello === null) return;
  member.send(`${Hello}`).catch((err) => console.log(`No message to send! or ${err}`));
});
bot.on("message", async message => {
 
  let prefix = `$` //يمديك تغيره لو تبي
  let messageArray = message.content.split(" ");
  let msg = message;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**You cannot use this command , you do not have Administration**") //هذي بيخليها لو ما معه ادمنستريشن بيرسله الرسالة ذي
  if (!message.content.startsWith(prefix)) return;
 
  if (cmd === `${prefix}setrole`) { // هذا الي يحطلك الأوتو رول ويخزنه بملف جسون الي سويناه في البداية بدونه م رح يمديك تستخدم اي كوماند ثاني
    var role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
    if (!role) return message.channel.send("Please specify a role ...")
    bot.codes[message.guild.id] = {
      message: null,
      role: role.id,
      guild: message.guild.id
    }
    fs.writeFile("./code.json", JSON.stringify(bot.codes, null, 4), err => {
      console.log(err)
      message.channel.send(`Done!`)
 
    })
  }
 
  if (cmd === `${prefix}dautorole`) { //هذا يمسحلك الأوتو رول
    if (bot.codes[message.guild.id] === undefined) return message.channel.send("**There's no autorole to delete**")
    delete bot.codes[message.guild.id]
    fs.writeFile("./code.json", JSON.stringify(bot.codes, null, 4), err => {
      console.log(err)
    })
    message.channel.send("Done! autorole deleted =)")
 
  }
  if (cmd === `${prefix}currentrole`) { //هذا يعلمك وش الأوتو رول الحالي
    if (bot.codes[message.guild.id] === undefined) return message.channel.send(`**There's no current autorole use \`${prefix}setrole\` to set one! **`)
  var acode = bot.codes[message.guild.id].role;
  let myRole = message.guild.roles.get(acode);
  message.channel.send(`**Current Auto role is:** ${myRole.name}`)
 
}
 
 
if (cmd === `${prefix}setmessage`) { //هذا الكوماند يحطلك مسج تلقائي يجي للخاص حق الشخص الي دخل
  let azoqzmsg = args.join(" ")
  if (!azoqzmsg) return message.channel.send(`**There is no message ! But if you wish to delete the auto message please use **\`${prefix}dmessage\``)
  if (bot.codes[message.guild.id] === undefined) return message.channel.send(`**I\m Sorry but you have to use \`${prefix}setrole\` to be able to use this**`)
  bot.codes[message.guild.id].message = azoqzmsg
  fs.writeFile("./code.json", JSON.stringify(bot.codes, null, 4), err => {
    console.log(err)
 
    message.channel.send(`Done!`)
 
  })
}
if (cmd === `${prefix}dmessage`) { //هذا الكوماند يمسحلك الأوتو مسج
  if (bot.codes[message.guild.id] === undefined) return message.channel.send(`__**Sorry There's no message to deleted**__`)
    delete bot.codes[message.guild.id].message
    fs.writeFile("./code.json", JSON.stringify(bot.codes, null, 4), err => {
 
      message.channel.send(`Done!`)
 
    })
  }
})


client.login(process.env.BOT_TOKEN);
