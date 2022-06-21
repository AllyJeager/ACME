  //scrolltop

function scrollToTop() {
      window.scrollTo(0, 0);
    }
//cookie
    function showCookie() {
      let cookie = document.querySelector('#cookie');
      cookie.style = "display:block;";
    }

    function hideCookie() {
      let cookie = document.querySelector('#cookie');
      cookie.style = "display:none;";
    }
//citazioni
 const QuotesContainer = document.querySelector('.quote-container')
    const quotes = document.querySelector('.quote')
    const quotes = [{
        text: "&#8220; Lo studio: strumento per costruire la propria libertà,educazione dell'ingegno e della creatività al lavoro,ma soprattutto occasione privilegiata di capire la vita &#8221; <br> Enrico Palandri"
      },
      {
        text: "&#8220; L'obiettivo non è vivere per sempre.L'obiettivo è creare qualcosa che vivrà per sempre &#8221; Chuck Palahniuk"
      },
    ]
    let idx = 1

    function updateQuotes() {
      const {
        text
      } = quotes [idx]
      quotes.innerHTML = text
      idx++
      if (idx > quotes.length - 1) {
        idx = 0
      }
    }
    setInterval(updateQuotes, 6000)

//contatti
    const toggles = document.querySelectorAll('.faq-toggle')
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
      })
    })
