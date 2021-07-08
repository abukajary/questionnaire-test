'use strict'


let dateDropdown = document.getElementById('yearSelector'),
    currentYear = new Date().getFullYear(),
    earliestYear = 1920;

while (currentYear >= earliestYear) {
    let dateOption = document.createElement('div'),
        currYear = document.createTextNode(currentYear);
    // dateOption.value = currentYear;
    dateOption.classList.add('option')
    dateOption.appendChild(currYear);
    dateDropdown.appendChild(dateOption);
    currentYear -= 1;
}

const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');

select.forEach(a => {
    a.addEventListener('click', b => {
        const next = b.target.nextElementSibling;
        next.classList.toggle('toggle');
    })
})
option.forEach(a => {
    a.addEventListener('click', b => {
        b.target.parentElement.classList.remove('toggle');

        const parent = b.target.closest('.select').children[0];
        parent.setAttribute('data-type', b.target.getAttribute('data-type'));
        parent.innerText = b.target.innerText;
    })
})

let send_u_form_data_btn = document.getElementById('sendUserFormData');
send_u_form_data_btn.addEventListener('click', ()=> {
//    clear input labels
})

let closeMobMenuBtn = document.getElementById('close_mob_menuBtn'),
    openMobMenuBtn = document.getElementById('open_mob_menuBtn'),
    mobileMenu = document.getElementById('mobMenu')

openMobMenuBtn.addEventListener('click', ()=>{
    mobileMenu.style.display = "flex";
    document.body.style.overflow = 'hidden'
})
closeMobMenuBtn.addEventListener('click', ()=> {
    mobileMenu.style.display = "none";
    document.body.style.overflow = 'auto'
})