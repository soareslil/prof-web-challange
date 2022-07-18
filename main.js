window.onload = function () {

  let dateTime = localStorage.getItem("startTime");

  let newDate = new Date();
  let dateAddInterval = new Date();
  let memoryDate = new Date(dateTime);

  let interval = 1;

  dateAddInterval.setTime(memoryDate.getTime() + (interval * 60 * 1000));

  const popup = document.getElementById("popup");

  if (dateAddInterval >= newDate) {
    sliding(popup, 0);
  }

}

let sliding = (target, duration = 500) => {

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

const headerBtn = document.getElementById('header-btn');

headerBtn.addEventListener('click', function () {
  const header = document.getElementById("header");
  sliding(header, 4000)
})

const exitBtn = document.getElementById('exit-btn');

exitBtn.addEventListener('click', function () {
  const btn = document.getElementById("popup");
  sliding(btn, 4000);

  let dateTime = new Date();
  let dateFormat = dateTime.getFullYear() + "-" + (dateTime.getMonth() + 1) + "-" + dateTime.getDate() + " " + dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();

  localStorage.setItem("startTime", dateFormat);
})

let scrollPosition = 0;
const div = document.getElementById("popup");

function checkPosition() {
  let windowY = window.scrollY;

  if (window.matchMedia("(max-width:959px)").matches) {
    if (scrollPosition < 864) {
      div.classList.add('is-hidden');
      div.classList.remove('is-visible');
    } else {
      div.classList.add('is-visible');
      div.classList.remove('is-hidden');
    }
  } else {
    if (scrollPosition < 364) {
      div.classList.add('is-hidden');
      div.classList.remove('is-visible');
    } else {
      div.classList.add('is-visible');
      div.classList.remove('is-hidden');
    }
  }
  scrollPosition = windowY;
}

window.addEventListener('scroll', checkPosition);
