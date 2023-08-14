let adcionar = document.getElementById('add');

adcionar.addEventListener('click', function () {
    let divCard = document.createElement('div');
    divCard.classList.add('card');

    document.getElementById('cards').appendChild(divCard);

})


document.getElementById('sub').addEventListener('click', function () {
    let divsCard = document.querySelectorAll('.card');

    if (divsCard.length > 1) {
        divsCard[length].remove();
        
    }
    
})

let sub = document.getElementById('sub');
