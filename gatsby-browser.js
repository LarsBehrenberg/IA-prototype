/* eslint-disable */

// Prevent/remove any style changes from Lightbox onRouteUpdate
export const onRouteUpdate = ({ location, prevLocation }) => {
  document.getElementsByTagName('body')[0].style.overflow = 'auto'
}

// Disable Sidebar on post pages when scrolling down to the newsletter
export const onClientEntry = () => {
  window.onload = () => {
    window.addEventListener('scroll', function (event) {
      if (document.getElementById('sidebar')) {
        const sideBar = document.getElementById('sidebar')
        const sideBottom = sideBar.getBoundingClientRect().bottom + 100
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
