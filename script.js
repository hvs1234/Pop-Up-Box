const popup = document.getElementById('popup');
const btn = document.getElementById('btn');
const okbtn = document.getElementById('ok-btn');

btn.addEventListener('click',()=> {
    popup.classList.add('open-popup')
})
okbtn.addEventListener('click',()=> {
    popup.classList.remove('open-popup')
})