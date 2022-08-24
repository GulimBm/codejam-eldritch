const azatot = document.querySelector('.azatot'),
    ktulhu = document.querySelector('.ktulhu'),
    sotot = document.querySelector('.sotot'),
    subnigura = document.querySelector('.subnigura'),
    difficultyContainer = document.querySelector('.difficulty-container'),
    easy = document.querySelector('.easy'),
    media = document.querySelector('.media'),
    hard = document.querySelector('.hard'),
    shuffleButton = document.querySelector('.shuffle-button'),
    rightStuff = document.querySelector('.right-stuff'),
    currentState = document.querySelector('.current-state'),
    deck = document.querySelector('.deck'),
    lastCard = document.querySelector('.last-card'),
    stageGreen1 = document.querySelector('.stage1green'),
    stageGreen2 = document.querySelector('.stage2green'),
    stageGreen3 = document.querySelector('.stage3green'),
    stageBrown1 = document.querySelector('.stage1brown'),
    stageBrown2 = document.querySelector('.stage2brown'),
    stageBrown3 = document.querySelector('.stage3brown'),
    stageBlue1 = document.querySelector('.stage1blue'),
    stageBlue2 = document.querySelector('.stage2blue'),
    stageBlue3 = document.querySelector('.stage3blue')




function openGame(){
    difficultyContainer.classList.remove('hidden');
    difficultyContainer.classList.add('open');
}

azatot.addEventListener('click', ()=>{
    azatot.classList.add('active');
    ktulhu.classList.remove('active');
    sotot.classList.remove('active');
    subnigura.classList.remove('active');
    openGame()
    currentState.classList.add('hidden');
    deck.classList.add('hidden');
    stageGreen1.innerText = '1';
    stageGreen2.innerText = '2';
    stageGreen3.innerText = '2';
    stageBrown1.innerText = '2';
    stageBrown2.innerText = '3';
    stageBrown3.innerText = '4';
    stageBlue1.innerText = '1';
    stageBlue2.innerText = '1';
    stageBlue3.innerText = '0';
})
ktulhu.addEventListener('click', ()=>{
    azatot.classList.remove('active');
    ktulhu.classList.add('active');
    sotot.classList.remove('active');
    subnigura.classList.remove('active');
    openGame()
    currentState.classList.add('hidden');
    deck.classList.add('hidden');
    stageGreen1.innerText = '0';
    stageGreen2.innerText = '1';
    stageGreen3.innerText = '3';
    stageBrown1.innerText = '2';
    stageBrown2.innerText = '3';
    stageBrown3.innerText = '4';
    stageBlue1.innerText = '2';
    stageBlue2.innerText = '0';
    stageBlue3.innerText = '0';
})
sotot.addEventListener('click', ()=>{
    azatot.classList.remove('active');
    ktulhu.classList.remove('active');
    sotot.classList.add('active');
    subnigura.classList.remove('active');
    openGame()
    currentState.classList.add('hidden');
    deck.classList.add('hidden');
    stageGreen1.innerText = '0';
    stageGreen2.innerText = '2';
    stageGreen3.innerText = '3';
    stageBrown1.innerText = '2';
    stageBrown2.innerText = '3';
    stageBrown3.innerText = '4';
    stageBlue1.innerText = '1';
    stageBlue2.innerText = '1';
    stageBlue3.innerText = '0';
})
subnigura.addEventListener('click', ()=>{
    openGame()
    azatot.classList.remove('active');
    ktulhu.classList.remove('active');
    sotot.classList.remove('active');
    subnigura.classList.add('active');
    currentState.classList.add('hidden');
    deck.classList.add('hidden');
    stageGreen1.innerText = '1';
    stageGreen2.innerText = '3';
    stageGreen3.innerText = '2';
    stageBrown1.innerText = '2';
    stageBrown2.innerText = '2';
    stageBrown3.innerText = '4';
    stageBlue1.innerText = '1';
    stageBlue2.innerText = '1';
    stageBlue3.innerText = '0';
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
    currentState.classList.add('hidden');
    deck.classList.add('hidden');
})
media.addEventListener('click', ()=>{
    hard.classList.remove('active');
    media.classList.add('active');
    easy.classList.remove('active');
    showShuffleButton()
    currentState.classList.add('hidden');
    deck.classList.add('hidden');
})
hard.addEventListener('click', ()=>{
    hard.classList.add('active');
    media.classList.remove('active');
    easy.classList.remove('active');
    showShuffleButton()
    currentState.classList.add('hidden');
    deck.classList.add('hidden');
})

shuffleButton.addEventListener('click', ()=>{
    shuffleButton.classList.add('hidden');
    currentState.classList.remove('hidden');
    deck.classList.remove('hidden');
})
// function showShuffleButton(){
//     shuffleButton.classList.remove('hidden');
// }
    // ktulhu = document.querySelector('.ktulhu'),
    // sotot = document.querySelector('.sotot'),
    // subnigura = document.querySelector('.subnigura')