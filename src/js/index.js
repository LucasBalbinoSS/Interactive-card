const $numbers = document.querySelectorAll('.card-before-number')
const $buttonSubmit = document.querySelector('button')

$numbers.forEach(function($number){
    $number.addEventListener('click', function() {
        resetAll()
        activate($number)
    })
})

isNumberActive()
buttonOff($buttonSubmit)


// funcoes
function resetAll() {
    $numbers.forEach(function($number) {
        reset($number)
    })
}

function reset($alvo) {
    $alvo.classList.remove('active')
}

function activate($alvo) {
    $alvo.classList.add('active')
    numberGet($alvo)
}

// valor para colocar na tela apos submit
function numberGet($alvo) {
    let $cardAfterQuantity = document.querySelector('#js-card-after-quantity')
    const quantity = $alvo.dataset.value

    $cardAfterQuantity.innerHTML = quantity
    $cardAfterQuantity.style.color = 'currentColor'
}

// verifica se algum número foi selecionado
function isNumberActive() {
    $numbers.forEach(function($number) {
        $number.addEventListener('click', function() {
        buttonOn($buttonSubmit)

        if ($number.classList.contains('active')) {
            screenChange()
        }
        else {
            return
        }
        })
    })
}

// troca de tela
function screenChange() {
    const $cardAfterContainer = document.querySelector('.card-after-container')
    const $cardBeforeContainer = document.querySelector('.card-before-container')
    const $buttonSubmit = document.querySelector('button')

    buttonClick($buttonSubmit)


    function buttonClick($alvo) {
        $alvo.addEventListener('click', function() {
            $cardAfterContainer.style.display = 'block'
            $cardBeforeContainer.style.display = 'none'
        })
    }
}

function buttonOff($alvo) {
    $alvo.classList.add('button-off')
}

function buttonOn($alvo) {
    $alvo.classList.remove('button-off')
}