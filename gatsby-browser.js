export const onClientEntry = () => {
    window.onload = () => {
      window.addEventListener('scroll', function(event){
        if(document.getElementById('sidebar')){
          let sideBar = document.getElementById('sidebar')  // your element
          let sideBottom = sideBar.getBoundingClientRect().bottom+100
          // current scroll position relative to the body
          let footerDiv = document.getElementById('newsletter')
          let footerTop = footerDiv.getBoundingClientRect().top-50
          if (sideBottom > footerTop) {
            document.getElementById("sidebar-container").classList.add("stuck");
          } else {
            document.getElementById("sidebar-container").classList.remove("stuck");
          }
        }
      })
    }
  }