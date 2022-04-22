const TelegramApi = require('node-telegram-bot-api');
const token = '5323930415:AAFlph52Y5ZmUO7d36gW8vY1D0dYXtPs2-I';
const bot = new TelegramApi(token, {polling: true});


bot.on('message', async msg => {
    const text = msg.text;
    const chatID = msg.chat.id;
   
   bot.setMyCommands([
       {command: '/start', description: 'Что то под 1'},
       {command: '/less', description: 'Что то под 2'},
       {command: '/end', description: 'Что то под 4'},
   ])
   
     if (text === '/start') {
     return bot.sendMessage(chatID, `Start ${text}`);
     }
     return bot.sendMessage(chatID, `Тебя зовут ${msg.from.username}`);
     console.log(msg);
});