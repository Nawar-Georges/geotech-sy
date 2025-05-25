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

    const initImageModal = () => {
        try {
            // Get the modal
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const captionText = document.getElementById('modalCaption');
            const closeModal = document.querySelector('.close-modal');

            // Get all equipment images
            const equipmentImages = document.querySelectorAll('.equipment-item img');

            // When the user clicks on an image, open the modal
            equipmentImages.forEach(img => {
                img.addEventListener('click', function () {
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                });
            });

            // When the user clicks on (x), close the modal
            closeModal.addEventListener('click', function () {
                modal.style.display = "none";
            });

            // When the user clicks anywhere outside of the modal, close it
            modal.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });

            // Close modal with Escape key
            document.addEventListener('keydown', function (event) {
                if (event.key === "Escape" && modal.style.display === "block") {
                    modal.style.display = "none";
                }
                // Add this to initImageModal()
                let currentImageIndex = 0;
                const allImages = Array.from(equipmentImages);
            });
        } catch (error) {
            console.error('Image modal initialization error:', error);
        }
    };

    initMobileMenu();
    initImageModal();

    /*-----------DropDown List-----------------*/
    const dropdown = document.querySelector('.dropdown');
    const toggleBtn = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    // 1. Toggle menu visibility
    toggleBtn.addEventListener('click', () => {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });
    /*-----------DropDown List end block of code -----------------*/


    // Add navigation functions
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        updateModalImage();
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        updateModalImage();
    }

    function updateModalImage() {
        const img = allImages[currentImageIndex];
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
});