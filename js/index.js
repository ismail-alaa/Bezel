

window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 150) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });








const words = ["websites", "apps", "softwares"];
let i = 0;
let j = 0;
let currentWord = [];
let isDeleting = false;
const speed = 150;
const target = document.getElementById("word");

function type() {
    if (i >= words.length) i = 0;

    let fullWord = words[i];

    if (isDeleting) {
        currentWord.pop();
    } else {
        currentWord.push(fullWord[j]);
        j++;
    }

    target.textContent = currentWord.join('');

    if (!isDeleting && j === fullWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && currentWord.length === 0) {
        isDeleting = false;
        j = 0;
        i++;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();


const teamCards = document.querySelectorAll('.team-card');

function revealTeamCards() {
  const triggerBottom = window.innerHeight * 0.9;

  teamCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom && !card.classList.contains('show')) {
      setTimeout(() => {
        card.classList.add('show');
      }, index * 200); 
    }
  });
}

window.addEventListener('scroll', revealTeamCards);
revealTeamCards();



 (function(){
  const slides = Array.from(document.querySelectorAll('.fz-slide'));
  const dotsWrap = document.getElementById('fzDots');
  const prev = document.getElementById('fzPrev');
  const next = document.getElementById('fzNext');
  let idx = slides.findIndex(s => s.classList.contains('fz-active'));
  if(idx < 0) idx = 0;
  
  slides.forEach((s,i)=>{
    const d = document.createElement('button');
    d.type = 'button';
    d.className = 'fz-dot' + (i===idx ? ' fz-active' : '');
    d.setAttribute('aria-label','Slide '+(i+1));
    d.dataset.i = i;
    d.onclick = ()=> goTo(i);
    dotsWrap.appendChild(d);
  });
  const dots = Array.from(dotsWrap.children);

  function update(newIdx){
    if(newIdx===idx) return;
    slides[idx].classList.remove('fz-active');
    dots[idx].classList.remove('fz-active');
    idx = (newIdx + slides.length) % slides.length;
    slides[idx].classList.add('fz-active');
    dots[idx].classList.add('fz-active');
  }

  function goTo(i){ update(i); }
  prev && (prev.onclick = ()=> update(idx-1));
  next && (next.onclick = ()=> update(idx+1));

  
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowLeft') prev && prev.click();
    if(e.key === 'ArrowRight') next && next.click();
  });

  
  window.fzUpdateSlide = function(i, data={}){
    const s = slides[i];
    if(!s) return;
    if(data.img) s.querySelector('.fz-avatar img').src = data.img;
    if(data.name) s.querySelector('.fz-name').textContent = data.name;
    if(data.role) s.querySelector('.fz-role').textContent = data.role;
    if(data.text) s.querySelector('.fz-text').textContent = data.text;
  };
})()
