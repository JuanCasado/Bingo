
const bingo = require('./bingo')
const stdin = process.openStdin()

bingo.init()

stdin.addListener('data', (data) => {
  bingo.update(data)
})