  //scrolltop

function scrollToTop() {
      window.scrollTo(0, 0);
    }
//cookie
 function hideCookie() {
      let cookie = document.querySelector('#innercookie');
      cookie.style = "display:none;";
    }
 function showCookie() {
      let cookie = document.querySelector('#innercookie');
      cookie.style = "display:block;";
    }
//citazioni
 const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')

const testimonials = [
  {
    text:
      "&#8220; Lo studio: strumento per costruire la propria libertà,educazione dell'ingegno e della creatività al lavoro,ma soprattutto occasione privilegiata di capire la vita &#8221; <br> Enrico Palandri",
  },
  {
    text:
      "&#8220; L'obiettivo non è vivere per sempre.L'obiettivo è creare qualcosa che vivrà per sempre &#8221; <br> Chuck Palahniuk",
  },
]

let idx = 1

function updateTestimonial() {
  const { text } = testimonials[idx]

  testimonial.innerHTML = text
 
  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 6000)

//contatti
    const toggles = document.querySelectorAll('.faq-toggle')
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
      })
    })
