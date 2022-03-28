let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('Wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
╠═〘 *Kawaii_botz™√* 〙 ═
╠➥ *Versi:* ${package.version}
╠➥ *Owner:* wa.me/6285715590172(d'anang.w.s)
╠➥ *Github:* https://github.com/Danangws/Kawaii_botz.git
╠➥ *Prefix:* ' ${usedPrefix} '
╠➥ *Menu:* ${usedPrefix}menu
╠➥ *Ping:* 102*ms*
╠➥ *Total user:* 3571*user*
╠➥ *Uptime:* 23:15:46
║
╠═〘 SEWA 〙 ═
╠➥ Gopay: 085715590172
╠➥ Indosat: 085715590172
║
╠═ Request? wa.me/6285715590172
╠═ facebook : *D'anang wijaya saputra* :

║
║${readMore}
╠═〘 RULES *_Kawaii_botz™√_* 〙 ═
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS PENYALAH*
║   *GUNAAN BOT*
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS KEBOCORAN DATA*
║   *PRIBADI ANDA*
╠➥ *KAMI AKAN MENYIMPAN DATA*
║   *SEPERTI NOMER TELEPON*
║   *ANDA DI DATABASE KAMI*
║ 
║ 
╠═ ©2022 kawaii_botz™✓
╠═ thx to : D'anang.w.s
╠═〘 KAWAII_BOTZ™√ 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
