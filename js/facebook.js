//     Secciones
let information = document.querySelector('#information'),
    fecha = document.querySelector('#fecha'),
    inicio = document.querySelector('#inicio'),
    // botones
    btnIniciofb = document.querySelector('#btnIniciofb'),
    btnInfo = document.querySelector('#btnInfofb'),
    btnPrograma = document.querySelector('#btnPrograma'),
    // Like/Liked Btn
    likeFace = document.querySelector('#likeFace'),
    likedFace = document.querySelector('#likedFace');

//============================== Inicio / Info / Programacion ==============================
btnIniciofb.addEventListener('click', () => {
    information.style.display = 'none';
    fecha.style.display = 'none';
    inicio.style.display = 'block';
    document.getElementById('btnIniciofb').classList.add("activo-btn-fb");
    document.getElementById('btnInfofb').classList.remove("activo-btn-fb");
    document.getElementById('btnPrograma').classList.remove("activo-btn-fb");
});

btnInfo.addEventListener('click', () => {
    information.style.display = 'block';
    fecha.style.display = 'none';
    inicio.style.display = 'none';
    document.getElementById('btnIniciofb').classList.remove("activo-btn-fb");
    document.getElementById('btnInfofb').classList.add("activo-btn-fb");
    document.getElementById('btnPrograma').classList.remove("activo-btn-fb");
});

btnPrograma.addEventListener('click', () => {
    information.style.display = 'none';
    fecha.style.display = 'block';
    inicio.style.display = 'none';
    document.getElementById('btnIniciofb').classList.remove("activo-btn-fb");
    document.getElementById('btnPrograma').classList.add("activo-btn-fb");
    document.getElementById('btnInfofb').classList.remove("activo-btn-fb");
});

//============================== Like / Liked ==============================
likeFace.addEventListener('click', () => {
    likeFace.style.display = 'none';
    likedFace.style.display = 'block';
});

likedFace.addEventListener('click', () => {
    likeFace.style.display = 'block';
    likedFace.style.display = 'none';
});



// Header
document.querySelector('.exit-btn').addEventListener('click', () => {
    document.querySelector('.display-menu-mb').classList.add('hidden');
    document.querySelector('.display-menu-mb').classList.remove('show-mb');
})
document.querySelector('.menu-mobile').addEventListener('click', () => {
    document.querySelector('.display-menu-mb').classList.remove('hidden');
    document.querySelector('.display-menu-mb').classList.add('show-mb');
    document.querySelector('.display-menu-mb').style.display = 'block';
})