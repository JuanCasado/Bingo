
const isNumber = (number, min, max) => {
  return Number(number)>=min && Number(number) <= max
}

const isLetter = (letter, check) => {
  return letter.toString()[0].toUpperCase()==check.toUpperCase()
}

const isEnter = (enter) => {
  return enter=='\n'
}

module.exports = {
  isNumber,
  isLetter,
  isEnter
}