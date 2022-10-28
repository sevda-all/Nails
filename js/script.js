let bg_1 =  document.getElementById('bg_1');
let bg_2 =  document.getElementById('bg_2');
let bg_3 =  document.getElementById('bg_3');
let bg_4 =  document.getElementById('bg_4');
let bg_5 =  document.getElementById('bg_5');
let bg_6 =  document.getElementById('bg_6');
let bg_7 =  document.getElementById('bg_7');
let bg_8 =  document.getElementById('bg_8');

let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    bg_1.style.marginLeft =  value * (-0.1) + 'px';
    bg_1.style.marginTop =  value * 0.4 + 'px';

    bg_2.style.marginLeft =  value * 0.2 + 'px';
    bg_2.style.marginTop =  value * (-0.3) + 'px';

    bg_3.style.marginLeft =  value * (-0.12) + 50 + 'px';
    bg_3.style.marginTop =  value * (-0.01) + 'px';

    bg_4.style.marginLeft =  (value * (-0.08)) + 100 + 'px';
    bg_4.style.marginTop =  value * (0.02) + 'px';

    bg_5.style.marginLeft =  (value * 0.06) - 200 + 'px';
    bg_5.style.marginTop =  value * (-0.07) + 'px';


    bg_6.style.marginLeft =  (value * 0.04) - 85 + 'px';

    bg_7.style.marginLeft =  (value * (-0.1)) + 220 + 'px';

    bg_8.style.marginLeft =  (value * 0.08) - 250 + 'px';


    header.style.top =  value * 0.5 + 'px';

})


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Ваша заявка успешно отправлена!', 'success');
    setTimeout(function(){
        document.getElementById('liveAlertPlaceholder').style.display = 'none';
    }, 5000);
  })
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

