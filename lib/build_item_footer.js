const _ = require('./utils')

module.exports = data => {
  let { parent, id, date } = data
  date = formatDate(date)
  const url = `/${parent}/${id}`
  return `<div class="panel">
<div class="date">${date}</div>
<hr>
<div class="creative-commons"><a href="http://creativecommons.org/licenses/by-sa/3.0/"><img src="/assets/img/cc-by-sa.png" border="0" alt="Creative Commons License" /></a><span>This work is published under a <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br>Quoted text isn't affected by this license.</span></div>
<hr>
<div class="back-home">
  <a href="/"><i class="fa fa-rocket"></i>go back to home page</a>
</div>
</div>`
}

const formatDate = date => {
  const parts = _.toLogicalDayFormat(date).split('-')
  const monthNum = Number(parts[1])
  console.log('monthText[monthNum]', monthNum, monthText[monthNum])
  parts[1] = monthText[monthNum]
  return parts.join(' ')
}

const monthText = [
  0,
  'Jan.',
  'Feb.',
  'March',
  'April',
  'May',
  'June',
  'Jul.',
  'Aug.',
  'Sept.',
  'Oct.',
  'Nov.',
  'Dec.'
]
