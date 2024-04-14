document.getElementById('botaoAmor').addEventListener('click', function() {
    document.getElementById('mensagemAmor').classList.remove('escondido');
    
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️'; // Emoji de coração
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 1 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
