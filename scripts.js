let prevButton =document.getElementById('prev')
let nextButton =document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length -1

function updateDots() {
    // Remove a classe 'active' de todos os dots
    dots.forEach(dot => dot.classList.remove('active'));
    // Adiciona a classe 'active' no dot correspondente ao item ativo
    dots[active].classList.add('active');
}


nextButton.onclick = () => {
    // Remove a classe 'active' do item atual
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    // Atualiza o índice 'active' para o próximo item
    active = active + 1 > lastPosition ? 0 : active + 1;
    
    // Adiciona a classe 'active' ao novo item
    items[active].classList.add('active');

    indicator.querySelector('.number').innerHTML =
 '0'+ (active + 1 )
    // Atualiza o indicador (dot)
    updateDots();
};

prevButton .onclick = () => {
    
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    // Atualiza o índice 'active' para o item anterior
    active = active - 1 < firstPosition ? lastPosition : active - 1;

    // Adiciona a classe 'active' ao novo item
    items[active].classList.add('active');

    // Atualiza o indicador (dot)
    updateDots();
}