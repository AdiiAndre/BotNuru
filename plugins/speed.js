let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('_Server : Chrome_\n*_Lib : AdiiWajshing/Baileys_*\nTesting Speed...')
  let neww = performance.now()
  m.reply(neww - old + 'ms yah:v')
}
handler.help = ['ping']
handler.tags = ['info', 'tools']

handler.command = /^(ping)$/i
module.exports = handler
