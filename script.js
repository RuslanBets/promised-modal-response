const btns = document.querySelectorAll('.modal button')
const btnDelete = document.getElementById('btn-delete')

btnDelete.addEventListener('click', () => {
  words.innerText = ''
})

btn.addEventListener('click', () => {
  glass.hidden = false
})

document.body.addEventListener('keydown', (e) => {
  if (e.code === 'KeyF') {
    glass.hidden = true
  }
})

document.addEventListener('click', (e) => {
  if (e.target === glass) {
    glass.hidden = true
  }
})


btns.forEach((btn) => {
  btn.addEventListener('click', (e) =>  {
    const li = document.createElement('li')
    li.innerText =  e.target.innerText
    words.append(li)
    glass.hidden = true
  })
})






