
const input = require('./input')
const text = require('./text')

const quit = 'Q'
const reload = 'R'
const create = 'C'
const maxNumber = 100
let games = 0
let bingo = []
let boards = []
let out = text

const setOutput = (output) => {
  out = output
}

const nextAction = (action) => {
  if (input.isEnter(action)) nextNumber()
  else if (input.isNumber(action,0,maxNumber)) wasSaid(Number(action))
  else if (input.isLetter(action,reload)) init()
  else if (input.isLetter(action,create)) createBoard(maxNumber)
  else if (input.isLetter(action,quit)) end()
  else out.badInput()
  if (gameEnded()) init()
}

const init = () => {
  bingo = validRandom(maxNumber)
  boards = []
  out.title()
  if (games==0) out.prompt()
  ++games
}

const end = () => {
  out.goodBy()
  process.exit()
}

const update = (action) => {
  out.enter()
  nextAction(action)
  checkBoards()
  out.prompt()
}

const gameEnded = () => {
  return bingo.length <= 0
}

const _wasSaid = (number) => {
  return bingo.includes(number)
}

const nextNumber = () => {
  const index = Math.floor(Math.random()*bingo.length)
  const newNumber = bingo[index]
  bingo.splice(index,1)
  out.newNumber(newNumber, bingo.length)
}

const wasSaid = (number) => {
  if (_wasSaid(number)) out.notSaidNumber(number)
  else out.saidNumber(number)
}

const createBoard = (maxNumber, xDim=5, yDim=5, fillFactor=1, dead=[]) => {
  const hasCenter = xDim%2 && yDim%2
  const validNumbers = validRandom(maxNumber)
  if (hasCenter) dead.push([(xDim-1)/2,(yDim-1)/2])
  
  let board = []
  for (let i = 0; i < xDim; ++i) {
    let board_row = []
    for (let j = 0; j < yDim; ++j) {
      if (dead.some((item)=>{return item[0]==i && item[1]==j})){
        board_row.push('')
      }
      else if (Math.random() <= fillFactor){
        const index = Math.floor(Math.random()*validNumbers.length)
        const newNumber = validNumbers[index]
        validNumbers.splice(index,1)
        board_row.push(newNumber)
      }
      else board_row.push('')
    }
    board.push(board_row)
  }
  boards.push(board)
  out.table(board)
}

const checkBoards = () => {
  let win = true
  for(let b = 0; b < boards.length && win; ++b) {
    const board = boards[b]
    for (let i = 0; i < board.length && win; ++i) {
      for (let j = 0; j < board[i].length && win; ++j) {
        if (_wasSaid(board[i][j])){
          win = false
        }
      }
    }
    if (win) {
      out.table(board)
      out.win()
    }
  }
}

const validRandom = (maxNumber) => {
  return [...Array(maxNumber).keys()]
}

module.exports = {
  init,
  update,
  setOutput,
}