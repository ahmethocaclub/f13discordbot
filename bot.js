const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setGame("&help | Hii!!");
});



const PREFİX = "&";

bot.on('message', message => {
   let msg = message.content.toUpperCase();
   let sender = message.author;
   let cont = message.content.slice(PREFİX.length).split(" ");
   let args = cont.slice(1);



    if(message.author.bot) return;
    if(!message.content.startsWith(PREFİX)) return;

  if (message.content.startsWith(PREFİX + 'jasonparts')) {
    message.channel.sendMessage(':ballot_box_with_check: ' + 'Part9 Jason:' + 'https://f13discordbot.weebly.com/uploads/1/1/8/3/118390772/part9jason.png');
  }

  if (message.content.startsWith(PREFİX + 'updates')) {
    message.channel.sendMessage('Update: B9861' + ':ballot_box_with_check:' + 'Download Update = https://drive.google.com/uc?id=1mZa-44JbqGPRh-KK4x_wiKaPxIxobzQ3&export=download');
  }
  
  if (message.content.startsWith(PREFİX + 'downloadgame')) {
    message.channel.sendMessage(':ballot_box_with_check:' + 'https://drive.google.com/uc?id=13Vb9gXBUF7fE3F5nZJIsY5ustidI6MsA&export=download' + ':ballot_box_with_check:');
  }
   
  

       });

  


  if (message.content.startsWith(PREFİX + 'f13help')) {
    message.channel.sendMessage(' Komutlar: &montaj  &clearchat, &weather?, &gifler');
  }

  
      

  


  
  





bot.login(process.env.BOT_TOKEN);
