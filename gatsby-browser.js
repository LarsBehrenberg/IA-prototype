/* eslint-disable */

export const onRouteUpdate = ({ location, prevLocation }) => {
  document.getElementsByTagName('body')[0].style.overflow = 'auto'
}

export const onClientEntry = () => {
  window.onload = () => {
    window.addEventListener('scroll', function (event) {
      if (document.getElementById('sidebar')) {
        const sideBar = document.getElementById('sidebar') // your element
        const sideBottom = sideBar.getBoundingClientRect().bottom + 100
        // current scroll position relative to the body
        const footerDiv = document.getElementById('newsletter')
        const footerTop = footerDiv.getBoundingClientRect().top - 50
        if (sideBottom > footerTop) {
          document.getElementById('sidebar').classList.add('stuck')
        } else {
          document.getElementById('sidebar').classList.remove('stuck')
        }
      }
    })
  }
}
