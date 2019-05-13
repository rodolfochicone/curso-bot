const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    if(ctx.update.message.from.id == 123){
        console.log('Ao seu dispor, mestre')
    }else{
        console.log('Sinto muito, mas só falo com meu mestre')
    }
})

bot.startPolling()