async function getComponent() {
  try {
    const { default: _ } = await import(/* webpackPrefetch: true */ 'lodash')
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    return element
  } catch {
    return 'An error occurred while loading the component'
  }
}

// const btn = document.createElement('button')
// btn.innerHTML = 'load'
// btn.onclick = function () {
//   getComponent().then(component => {
//     document.body.appendChild(component)
//   })
// }

// document.body.appendChild(btn)
getComponent().then(component => {
  document.body.appendChild(component)
})
