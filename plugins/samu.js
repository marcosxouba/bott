let handler = async m => m.reply(`
  ^    ^    ^    ^    ^  
 /D\  /R\  /K\  /Z\  /E\ 
<___><___><___><___><___>



𝙈𝙮 𝘾𝙝𝙖𝙣𝙚𝙡:

https://youtube.com/channel/UCnJsyIe2XksWO3jVHGXYMhw
                                        
`.trim()) 
handler.help = ['samu']
handler.tags = ['info']
handler.command = /^samu$/i

module.exports = handler
