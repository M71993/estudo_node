const os = require('os')


setInterval(()=>{
console.clear()
const {freemem, totalmem} = os

const total = parseInt(totalmem()/1024/1024)
const mem = parseInt(freemem()/1024/1024)
const percents = parseInt((mem /total) * 100)

const stats = {
      free:`${mem} MB`,
      total:`${total} MB`,
      usage:`${percents} MB`
}

console.table(stats)


},1000)


