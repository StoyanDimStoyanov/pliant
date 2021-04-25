let clicked = false;

document.addEventListener('click', (ev) => {

    if (ev.target.tagName.toLowerCase() === 'a' && ev.target.parentElement.parentElement.parentElement.tagName.toLowerCase() === 'nav') {
        const navElements = document.querySelectorAll(' nav > ul > li > a');


        Array.from(navElements).map(el => el.classList.remove('clicked'));
        ev.target.classList.add('clicked')
    } else if (ev.target.tagName.toLowerCase() === 'a' && ev.target.parentElement.parentElement.parentElement.tagName.toLowerCase() === 'div') {
        const aElements = document.querySelectorAll('div > ul > li > a');
        console.log(aElements);
        const str = ev.target.innerHTML;
        const el = document.querySelectorAll('.footerAnchor');
        // console.log(el);
        // if (el !== undefined){
        //     console.log(el);
        //     el.textContent = el.textContent.split(' ').join();
        // }else{

        // }
        
        Array.from(aElements).map(el => el.classList.remove('footerAnchor'));
        ev.target.classList.add('footerAnchor');
        const firtStr = str.substr(0, str.indexOf(' ')); 
        const secStr = str.substr(str.indexOf(' ') + 1);
        // console.log(firtStr);
        ev.target.innerHTML = `${firtStr}`  + '&nbsp&nbsp' + `${secStr}`
        
        
    }else if (ev.target.classList.contains('dots')){
        clicked = true;
        carousel();
        clicked = false;
    }
})

let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const x = document.getElementsByClassName("slide-div");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  if (!clicked) {
      setTimeout(carousel, 5000); 
  }
}