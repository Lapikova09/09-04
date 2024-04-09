function log(){
    let login = document.querySelector('.log')
    login.classList.add('show')
    let reg = document.querySelector('.register')
    reg.classList.remove('show')
}

function reg(){
    let reg = document.querySelector('.register')
    reg.classList.add('show')
    let login = document.querySelector('.log')
    login.classList.remove('show')
}