import _ from 'lodash'
import print from './print'
import dayjs from 'dayjs'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  btn.innerHTML = dayjs(new Date()).format('DD/MM/YYYY') + _.join(['Hello', 'World'], ' ')
  btn.onclick = print
  element.appendChild(btn)
  return element
}

document.body.appendChild(component())
