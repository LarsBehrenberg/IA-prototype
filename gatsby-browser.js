/* eslint-disable */

let myTimer

// export const onPreRouteUpdate = ({ location, prevLocation }) => {
//   clearInterval(myTimer)
// }

export const onRouteUpdate = ({ location, prevLocation }) => {
  document.getElementsByTagName('body')[0].style.overflow = 'auto'

  // let slideIndex = 1

  // clearInterval(myTimer)
  // function showSlides(n) {
  //   var i
  //   var carouselSlides = document.getElementsByClassName('carousel-slides')
  //   if (n > carouselSlides.length) {
  //     slideIndex = 1
  //   }
  //   if (n < 1) {
  //     slideIndex = carouselSlides.length
  //   }
  //   for (i = 0; i < carouselSlides.length; i++) {
  //     carouselSlides.item(i).style.display = 'none'
  //   }
  //   if (carouselSlides.length !== 0) {
  //     carouselSlides.item(slideIndex - 1).style.display = 'block'
  //     carouselSlides.item(slideIndex - 1).style.animation = 'fadeInHero 7s'
  //   }
  // }

  // const plusSlides = n => {
  //   if (n < 0) {
  //     showSlides((slideIndex -= 1))
  //   } else {
  //     showSlides((slideIndex += 1))
  //   }
  // }
  // if (location.pathname === '/') {
  //   showSlides(slideIndex)
  //   myTimer = setInterval(function () {
  //     plusSlides(1)
  //   }, 7000)
  // }
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
