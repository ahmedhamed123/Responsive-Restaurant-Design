

// open and close menu

var iconMenu = document.getElementById("openMenu")

var menu = document.querySelector(".menu") 

iconMenu.onclick = function(){
    iconMenu.classList.toggle("fa-times")
    menu.classList.toggle("active")
}

//--------------------
// Activation background header will be white when i scrol down */

var header = document.getElementById("header")

window.onscroll = function(){
    if(this.scrollY >=200){
        header.classList.add("activation")
    }
    else{
        header.classList.remove("activation")
    }
}

//------------------------------------------------

var swiper = new Swiper('.home_slider', {
     // Navigation arrows
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // // Optional parameters
    loop: true,
  
    // // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
   
  
    // // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay:{
        delay:5000,
        disableOnInteraction:false
    }
  });


  //-------------------------------------

  let closeResrv = document.getElementById("close_resrv")
  let reservation = document.getElementById("reservation_div")
  let btnResrv = document.querySelectorAll("#click_to_resrv")
  let iconResrv = document.getElementById("resrv")



  closeResrv.onclick = () => {
    reservation.classList.remove("active")

  }

  iconResrv.onclick = () => {
    reservation.classList.add("active")

  }

  btnResrv.forEach(item =>{
    item.onclick = ()=>{
      reservation.classList.add("active")
    }
  })