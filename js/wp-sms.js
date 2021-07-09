let input = document.getElementById('wp-input'),
    button = document.getElementById('wp-button'),
    cerrar = document.getElementById('cerrarBtn'),
    openbutton = document.getElementById('poupWp'),
    ventanaWp = document.getElementById('wpWindow');

input.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    button.setAttribute('href', 'https://wa.me/50495562851?text=' + valorInput)
})

openbutton.addEventListener('click', () => {
    ventanaWp.style.display = 'block';
})

cerrar.addEventListener('click', () => {
    ventanaWp.style.display = 'none';
})

// To Top Button

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.container-top-btn').classList.add('show');
        document.querySelector('.container-wp-btn').classList.add('show');
        document.querySelector('.container-wp-sms').classList.add('show');
    } else {
        document.querySelector('.container-top-btn').classList.remove('show');
        document.querySelector('.container-wp-btn').classList.remove('show');
        document.querySelector('.container-wp-sms').classList.remove('show');
    }
}
document.querySelector('.to-top-btn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
document.querySelector('.live-btngen').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})