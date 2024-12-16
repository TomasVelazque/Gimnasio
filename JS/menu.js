
    document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    // Alternar el menú
    menuToggle.addEventListener('click', () => {
        const isOpen = sidebar.classList.contains('open');
        sidebar.classList.toggle('open', !isOpen);
        content.classList.toggle('shift', !isOpen);
    });
});

