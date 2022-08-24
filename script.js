const azatot = document.querySelector('.azatot'),
    ktulhu = document.querySelector('.ktulhu'),
    sotot = document.querySelector('.sotot'),
    subnigura = document.querySelector('.subnigura'),
    difficultyChoice = document.querySelector('.difficulty-choice'),
    easy = document.querySelector('.easy'),
    media = document.querySelector('.media'),
    hard = document.querySelector('.hard'),
    shuffleButton = document.querySelector('.shuffle-button')

function openGame(){
    difficultyChoice.classList.remove('hidden');
    difficultyChoice.classList.add('open');
}

azatot.addEventListener('click', ()=>{
    azatot.classList.add('active');
    ktulhu.classList.remove('active');
    sotot.classList.remove('active');
    subnigura.classList.remove('active');
    openGame()
})
ktulhu.addEventListener('click', ()=>{
    azatot.classList.remove('active');
    ktulhu.classList.add('active');
    sotot.classList.remove('active');
    subnigura.classList.remove('active');
    openGame()
})
sotot.addEventListener('click', ()=>{
    azatot.classList.remove('active');
    ktulhu.classList.remove('active');
    sotot.classList.add('active');
    subnigura.classList.remove('active');
    openGame()
})
subnigura.addEventListener('click', ()=>{
    openGame()
    azatot.classList.remove('active');
    ktulhu.classList.remove('active');
    sotot.classList.remove('active');
    subnigura.classList.add('active');
    
})

function showShuffleButton(){
    shuffleButton.classList.remove('hidden');
    shuffleButton.classList.add('active');
}
easy.addEventListener('click', ()=>{
    hard.classList.remove('active');
    media.classList.remove('active');
    easy.classList.add('active');
    console.log('easy')
    showShuffleButton()
})
media.addEventListener('click', ()=>{
    hard.classList.remove('active');
    media.classList.add('active');
    easy.classList.remove('active');
    showShuffleButton()
})
hard.addEventListener('click', ()=>{
    hard.classList.add('active');
    media.classList.remove('active');
    easy.classList.remove('active');
    showShuffleButton()
})
    // ktulhu = document.querySelector('.ktulhu'),
    // sotot = document.querySelector('.sotot'),
    // subnigura = document.querySelector('.subnigura')