document.addEventListener('DOMContentLoaded', () => {
    const initMobileMenu = () => {
        try {
            const mobileBtn = document.querySelector('.mobile-menu-btn');
            const header = document.querySelector('header');

            if (!mobileBtn || !header) return;

            mobileBtn.addEventListener('click', () => {
                header.classList.toggle('mobile-open');
            });
        } catch (error) {
            console.error('Mobile menu initialization error:', error);
        }
    };

    initMobileMenu();
});


/*-----------DropDown List-----------------*/

const dropdown    = document.querySelector('.dropdown');
const toggleBtn   = dropdown.querySelector('.dropdown-toggle');
const menu        = dropdown.querySelector('.dropdown-menu');

// 1. Toggle menu visibility
toggleBtn.addEventListener('click', () => {  
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

/*-----------DropDown List end block of code -----------------*/
