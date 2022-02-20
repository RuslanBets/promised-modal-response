
const btnDelete = document.getElementById('btn-delete')

btnDelete.addEventListener('click', () => {
  words.innerText = ''
})

btn.addEventListener('click', () => {
  getAnswer('ALFA', 'BETA', 'GAMMA').then(addItem).finally(clearBtns)
})

document.body.addEventListener('keydown', (e) => {
  if (e.code === 'KeyF') {
    glass.hidden = true
  }
})


function addItem(str) {
  const li = document.createElement('li')
  li.innerText = str
  words.append(li)
}

function getAnswer(btn1, btn2, btn3) {
  const buttons = Array.from(arguments)
  createBtns(buttons)
  return new Promise((resolve, reject) => {
    const btns = document.querySelectorAll('.modal button')
    glass.hidden = false
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        resolve(e.target.innerText)
        glass.hidden = true
      })
    })
    glass.onclick = (e) => {
      if (e.target === glass) {
        glass.hidden = true
        reject()
      }
    }
  })
}

function createBtns(names) {
  for (let item of names) {
    const button = document.createElement('button')
    button.innerText = item
    document.querySelector('.modal').append(button)
  }
}

function clearBtns() {
  document.querySelector('.modal').innerHTML = ''
}
