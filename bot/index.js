import { Telegraf } from 'telegraf'
const TOKEN = '7043375814:AAFh3Fs0L_hctGK_E5l2l6oyygWz4iPoGOc'

const bot = new Telegraf(TOKEN)

const web_link = 'https://7474-176-99-98-198.ngrok-free.app'
bot.start(ctx =>
	ctx.reply('Начинай Тапать самую без полезную монету в мире', {
		reply_markup: {
			inline_keyboard: [
				[
					{
						text: 'Тапать тута!!!!',
						web_app: { url: web_link },
					},
				],
			],
		},
	})
)

bot.launch()
