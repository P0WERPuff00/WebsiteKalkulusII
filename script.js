    // Pastikan DOM telah siap
    document.addEventListener("DOMContentLoaded", function () {
      AOS.init();
      const slider = document.getElementById('slider');
      const slides = document.querySelectorAll('.slide');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let currentIndex = 0;
      const totalSlides = slides.length;

      // Fungsi untuk memperbarui visibilitas tombol navigasi
      function updateButtons() {
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === totalSlides - 1 ? 'none' : 'block';
      }

      // Fungsi untuk menggeser slide
      function moveSlide(direction) {
        // Cegah jika sudah di ujung slider
        if (direction < 0 && currentIndex === 0) return;
        if (direction > 0 && currentIndex === totalSlides - 1) return;
        currentIndex += direction;

        // Menggunakan lebar aktual slide sebagai acuan pergeseran
        const slideWidth = slides[0].offsetWidth;
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
        updateButtons();
      }

      // Inisialisasi tombol
      updateButtons();

      // Event listener untuk tombol navigasi
      prevBtn.addEventListener('click', function () {
        moveSlide(-1);
      });
      nextBtn.addEventListener('click', function () {
        moveSlide(1);
      });

      // Update ulang posisi slide saat ukuran jendela berubah
      window.addEventListener('resize', function(){
        const slideWidth = slides[0].offsetWidth;
        slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
      });
    });





window.addEventListener('resize', () => {
    document.querySelectorAll('.video-wrapper iframe').forEach(iframe => {
        iframe.style.height = iframe.offsetWidth * 9/16 + 'px';
    });
});



    // Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
  
  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
});






        // Toggle desktop dropdown
        const dropdownBtn = document.querySelector('.dropdown-btn');
        const desktopDropdown = document.getElementById('desktopDropdown');

        dropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            desktopDropdown.classList.toggle('show');
        });

        // Close desktop dropdown when clicking outside
        document.addEventListener('click', () => {
            desktopDropdown.classList.remove('show');
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileDropdown = document.getElementById('mobileDropdown');

        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileDropdown.classList.toggle('show');
        });

        // Smooth scrolling for all links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Close dropdowns if open
                    desktopDropdown.classList.remove('show');
                    mobileDropdown.classList.remove('show');
                    
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

       
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown') && !e.target.closest('.mobile-menu-btn')) {
                desktopDropdown.classList.remove('show');
                mobileDropdown.classList.remove('show');
            }
        });



