const nav = document.querySelector('#header nav')
const toogle = document.querySelectorAll('nav, toggle')

for (const element of toogle){
  element.addEventListener('click', function(){
    nav.classList.toggle('show')})

}


const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll',function(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
})