'use strict'

let dateDropdown = document.getElementById('yearSelector'),
    currentYear = new Date().getFullYear(),
    earliestYear = 1920;

while (currentYear >= earliestYear) {
    let dateOption = document.createElement('option');
    dateOption.value = currentYear;
    dateOption.text = currentYear;
    dateDropdown.add(dateOption);
    if (currentYear === 2000) {
        dateOption.selected = true
    }
    currentYear -= 1;
}

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