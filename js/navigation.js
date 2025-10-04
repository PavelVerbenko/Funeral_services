// Навигация между страницами
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');
    const logo = document.querySelector('.logo');

    // Обработка навигации
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');

            // Скрыть все страницы и показать целевую
            pages.forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(targetPage).classList.add('active');

            // Закрыть мобильное меню, если оно открыто
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Прокрутка к верху страницы
            window.scrollTo(0, 0);
        });
    });

    // Мобильное меню - бургер
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');

            // Блокировка скролла при открытом меню
            document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });

        // Закрытие меню при клике на ссылку (дублируется для надежности)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Закрытие меню при клике вне области меню
        document.addEventListener('click', function(e) {
            if (navList.classList.contains('active') &&
                !e.target.closest('.nav-list') &&
                !e.target.closest('.hamburger')) {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    // Обработка клика по логотипу для возврата на главную
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();

            // Скрыть все страницы и показать главную
            pages.forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById('home').classList.add('active');

            // Закрыть мобильное меню, если оно открыто
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Прокрутка к верху страницы
            window.scrollTo(0, 0);
        });
    }
});