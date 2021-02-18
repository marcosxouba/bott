let handler = function (m) {
  this.sendContact(m.chat, '4641228001', 'Eze', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
