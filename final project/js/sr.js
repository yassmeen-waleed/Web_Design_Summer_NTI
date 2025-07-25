document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  
  const counters = document.querySelectorAll('.count');
  const section = document.querySelector('.je');
  let started = false;

  function animateCount(el) {
    const target = +el.dataset.target;
    let current = 0;
    const speed = 60;

    const interval = setInterval(() => {
      const increment = Math.ceil(target / speed);
      current += increment;

      if (current >= target) {
        el.textContent = target;
        clearInterval(interval);
      } else {
        el.textContent = current;
      }
    }, 20);
  }

  window.addEventListener('scroll', function () {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!started && sectionTop < windowHeight - 100) {
      counters.forEach(counter => animateCount(counter));
      started = true;
    }
  });

  const form = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const formError = document.getElementById('form-error');

  form.addEventListener('submit', function (e) {
    let hasError = false;
    emailError.style.display = 'none';
    formError.style.display = 'none';

    if (emailInput.value.trim() === '') {
      emailError.style.display = 'block';
      hasError = true;
    }

    if (hasError) {
      e.preventDefault();
      formError.style.display = 'block';
    }
  });
});
