// Selecciona los elementos necesarios
const markAll = document.querySelector('#mark-all');
const numberElement = document.querySelector('#number');
const posts = document.querySelectorAll('.post');

// Actualiza el contador de notificaciones no leídas
const updateNotifications = () => {
    const notReadElements = document.querySelectorAll('.not-read');
    numberElement.innerText = notReadElements.length;
};

// Añade el evento click a cada notificación individual
posts.forEach(post => {
    post.addEventListener('click', () => {
        const statusElement = post.querySelector('.status');
        if (statusElement.classList.contains('not-read')) {
            statusElement.classList.remove('not-read');
            updateNotifications(); // Actualiza el contador después de marcar como leído
        }
    });
});

// Añade el evento click al botón "Mark all as read"
markAll.addEventListener('click', () => {
    const notReadElements = document.querySelectorAll('.not-read');
    notReadElements.forEach(notReadElement => {
        notReadElement.classList.remove('not-read');
    });
    updateNotifications(); // Actualiza el contador después de marcar todas como leídas
});

// Inicializa el contador al cargar la página
updateNotifications();