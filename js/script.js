// Togle class active
const navbarNav = document.querySelector('.navbar-nav');
//When Clicked

document.querySelector('#Dessert').onclick = () => {
    navbarNav.classList.toggle('active')

};

//click luar sidebar untuk menghilangkan nav
const Dessert = document.querySelector('#Dessert');

document.addEventListener('click', function(e){
    if(!Dessert.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
}) 