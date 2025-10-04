// Обработка форм
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const modalContactForm = document.getElementById('modalContactForm');

    function handleFormSubmit(e) {
        e.preventDefault();
        alert('В реальном приложении здесь бы отправлялись данные на сервер. Спасибо за ваше сообщение!');
        if (e.target === modalContactForm) {
            document.getElementById('contactModal').style.display = 'none';
        }
        e.target.reset();
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    if (modalContactForm) {
        modalContactForm.addEventListener('submit', handleFormSubmit);
    }
});