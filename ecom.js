const special_cross = document.querySelector('.special_cross');
const top_heading = document.querySelector('.top_heading');
const input_box_for_searchingProduct = document.querySelector('.input_box_for_searchingProduct');
const search_product = document.querySelector('.search_product');
const layer_div_for_input_box = document.querySelector('#layer_div_for_input_box');
const crossButton = document.querySelector('.crossButton');
const hamburger_menu = document.querySelector('.hamburger_menu');
const navMenu_cotainer = document.querySelector('.navMenu_cotainer');
const sign_in = document.querySelector('.sign_in');
const bg_black_layer = document.querySelector('.bg_black_layer');
const form_container = document.querySelector('.form_container');
const cross_form = document.querySelector('.cross_form');
const gift_generator_btn = document.querySelector('#gift_generator_btn');
const gift_form_wrapper = document.querySelector('.gift_form_wrapper');
const cross_gift = document.querySelector('.cross_gift');
const action_after_submit = document.querySelector('#action_after_submit');
const sumbit_result_wrapper = document.querySelector('.sumbit_result_wrapper');
const cross_result = document.querySelector('.cross_result');


// product page 
const form_of_product_page = document.querySelector('.form_of_product_page');
const second_sign_in_for_pro_page = document.querySelector('.second_sign_in_for_pro_page');


// top heading 
special_cross.addEventListener('click' , ()=>{
  top_heading.classList.toggle('hide_top_heading');
});

// gift form  
gift_generator_btn.addEventListener('click' , ()=>{
  gift_form_wrapper.classList.add('show_gift_from')
});
cross_gift.addEventListener('click' , ()=>{
  gift_form_wrapper.classList.remove('show_gift_from');
});

// action after submit 
action_after_submit.addEventListener('click' , ()=>{
  sumbit_result_wrapper.classList.add('show_result');
    gift_form_wrapper.classList.remove('show_gift_from');
});

cross_result.addEventListener('click' , ()=>{
  sumbit_result_wrapper.classList.remove('show_result');
    gift_form_wrapper.classList.remove('show_gift_from');
});

// search box 
search_product.addEventListener('click', () => {
  input_box_for_searchingProduct.classList.add('show_input');
  layer_div_for_input_box.classList.add('show_input_layer');
  form_container.classList.toggle('lower_z_index');

})
crossButton.addEventListener('click', () => {
  input_box_for_searchingProduct.classList.remove('show_input');
  layer_div_for_input_box.classList.remove('show_input_layer');

})
// window scrolling effect 
window.onscroll = () => {
  input_box_for_searchingProduct.classList.remove('show_input');
  layer_div_for_input_box.classList.remove('show_input_layer');

}


hamburger_menu.addEventListener('click', () => {
  navMenu_cotainer.classList.toggle('Show_nav_menu');
  hamburger_menu.classList.toggle('rotate_bar');
  hamburger_menu.classList.toggle('hidden_visibility');

if (hamburger_menu.innerHTML.match('<i class="fas fa-bars"></i>')) {
        hamburger_menu.innerHTML = '<i  style="color:rgb(9, 175, 9) ; font-size:4rem;   " class="fas fa-times"></i>'
    } else {
        hamburger_menu.innerHTML = '<i class="fas fa-bars"></i>'
    }
});


// sign in 

sign_in.addEventListener('click' , ()=>{
bg_black_layer.classList.add('add_bg_layer');
form_container.classList.add('z_index_form');
cross_form.classList.add('show_cross');

// product page form 

form_of_product_page.classList.add('show_log_reg_form_of_pro_page');

});
cross_form.addEventListener('click' , ()=>{
bg_black_layer.classList.remove('add_bg_layer');
form_container.classList.remove('z_index_form');
cross_form.classList.remove('show_cross');
// product page form 

form_of_product_page.classList.remove('show_log_reg_form_of_pro_page');

});

// second sign in for product page 

// second_sign_in_for_pro_page.addEventListener('click' , ()=>{
// form_of_product_page.classList.add('show_log_reg_form_of_pro_page');
// cross_form.classList.add('show_cross');
// bg_black_layer.classList.add('add_bg_layer');
// });

// hide show login and reg form

const login = document.querySelector('.login');
const register = document.querySelector('.register');
const login_form = document.querySelector('.login_form');
const reg_form = document.querySelector('.reg_form');

register.addEventListener('click', () => {
  login_form.classList.add('hide_login')
  reg_form.classList.add('show_reg_form')
  register.classList.add('reg_bg_color_chage')
  login.classList.add('bg_color_change')
})
login.addEventListener('click', () => {
  login_form.classList.remove('hide_login');
  reg_form.classList.remove('show_reg_form');
  register.classList.remove('reg_bg_color_chage');
  login.classList.remove('bg_color_change');
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});




   var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
            autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
          breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
      },
      });










