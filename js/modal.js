// Управление модальным окном
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close-modal');

    // Открытие модального окна
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            contactModal.style.display = 'flex';
        });
    }

    // Закрытие модального окна
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            contactModal.style.display = 'none';
        });
    }

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
});