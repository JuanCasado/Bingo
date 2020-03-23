
const CFonts = require('cfonts');
const Table = require('table')
const titleMsg = 'Bingo!'
const infoMsg = `
--------------------------------------------------
▶️  Enter to get the next number
🔎 Number to search if it was previously outputed
📝 C to create a new board
♻️  R to restart
💣 Q to quit

> `
const invalidMsg = '💔 That input broke my heart'
const goodByMsg =  'Good by 👾'
const newNumberMsg = 'New Number: '
const numbersLeftMsg = 'Numbers left: '
const numberMsg = 'Number: '
const saidNumberMsg = ' was said 🤠'
const notSaidNumberMsg = ' was NOT said 😡'
const winMsg = '🥇 Has Won! 🥇'

let buffer = ''
const addToBuffer = (content) => {
  buffer +=  content
}
const cleanBuffer = () => {
  buffer = ''
}

const newNumber = (number, numbersLeft=null) => {
  addToBuffer(newNumberMsg + number + (numbersLeft? ' | ' + numbersLeftMsg + numbersLeft : ''))
  enter()
}

const prompt = () => {
  addToBuffer(infoMsg)
  title()
}

const badInput = () => {
  addToBuffer(invalidMsg)
  enter()
}

const title = () => {
  console.clear()
  CFonts.say(titleMsg)
  process.stdout.write(buffer)
  cleanBuffer()
}

const goodBy = () => {
  addToBuffer(goodByMsg)
  title()
  console.log()
}

const saidNumber = (number) => {
  addToBuffer(numberMsg + number + saidNumberMsg)
  enter()
}

const notSaidNumber = (number) => {
  addToBuffer(numberMsg + number + notSaidNumberMsg)
  enter()
}

const enter = () => {
  addToBuffer('\n')
}

const table = (table_data) => {
  addToBuffer(Table.table(table_data))
  enter()
}

const win = () => {
  addToBuffer(winMsg)
  enter()
}

module.exports = {
  newNumber,
  prompt,
  badInput,
  title,
  goodBy,
  saidNumber,
  notSaidNumber,
  enter,
  table,
  win
}