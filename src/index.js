// import _ from 'lodash'
import print from './print'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')
  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = print
  element.appendChild(btn)
  // element.innerHTML = _.join(['Hello', 'World'], ' ')
  return element
}

document.body.appendChild(component())
