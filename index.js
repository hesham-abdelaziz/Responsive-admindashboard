const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler')
const icons = themeToggler.querySelectorAll('span');

menuBtn.addEventListener('click' , () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click' , () => {
    sideMenu.style.display = 'none';
})


themeToggler.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme');

})
icons.forEach(icon => {
    icon.addEventListener('click' , (e) => {
        icons.forEach(icon => {
            icon.classList.remove('active');
        })
        icon.classList.toggle('active')
    })
   })