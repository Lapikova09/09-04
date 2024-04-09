async function GetData(){
    let a = await fetch('https://660c1c283a0766e85dbd6f9c.mockapi.io/v1/us')
    let b = await a.json()
    return b
}

let data = await GetData()

/*let active_filtr = 0

function render(){
    data.map((element)=>{
        if(element.id > 0){
        let card0 = document.createElement('div')  
        let list = document.querySelector('.catalog')
        card0.classList.add('card')
        console.log(card0)
        card0.innerHTML = `
                            <img src="/img/${element.icon}" alt="">
                            <p>${element.name}</p>
                            <button><img src="/img/Button125.png" alt=""></button>`
                            
            if(pr(element, active_filtr)){
                list.append(card0)
            }
   
        }
    })
}
function But38(index, size){
    active_filtr = size
    let arr_but = document.querySelectorAll('#but')

    for(let i = 0; i < arr_but.length; i++){
        if(arr_but[i].classList.contains('white')){
            if(i === index){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                render()
            }
        }  
        else if(arr_but[i].classList.contains('black')){
            if(i === index){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                let list = document.querySelector('.catalog')
                list.innerHTML = ''
            }
        }
    }
}

function pr(index, act_filt){
    let ind = index.size
    for(let i = 0; i < ind.length; i++){
        if(ind[i] === act_filt){
            return 1
        }
        console.log(2)
        return 0
    }
}

render()*/

const RED = 'red'
const BLUE ='blue'
const GREY = 'grey'
const YELLOW = 'yellow'
const DARK_GREY = 'dark grey'
const BLACK = 'black'
const BROWN = 'brown'
const GREEN = 'green'
const BEIGE = 'beige'
const DARK_BROWN ='dark brown'

const RUNNERS = 'runners'
const CASUAL_SHOES = 'casual shoes'
const HIKING = 'hiking'
const SNEAKER = 'sneaker'
const BASKETBALL = 'basketball'
const GOLF = "golf"
const OUTDOOR = "outdoor"

const MAN ='man'
const WOMAN ='woman'

let active_filtr = 0
let act_filt_col 
let act_filt_type
let act_filt_sex
let arr_but = document.querySelectorAll('#but')
let arr_color = document.querySelectorAll('#butc')
let arr_type = document.querySelectorAll('#butt')
let arr_sex = document.querySelectorAll('#buts')

function Show(){
    data.map((el)=>{
        let card0 = document.createElement('div')  
        let list = document.querySelector('.catalog')
        card0.classList.add('card')
        card0.innerHTML = `
                            <img src="/img/${el.icon}" alt="">
                            <p>${el.name}</p>
                            <button><img src="/img/Button125.png" alt=""></button>`
        list.append(card0)
    })
}

Show()

function But(){
    for(let i = 0; i < arr_but.length; i++){
        if(arr_but[i].classList.contains('black')){
            arr_but[i].classList.toggle('white')
            arr_but[i].classList.toggle('black')
        }
    }
    for(let a = 0; a < arr_color.length; a++){
        if(arr_color[a].classList.contains('border')){
            arr_color[a].classList.toggle('border')
            arr_color[a].classList.toggle('colors')
        }
    }
    for(let d = 0; d < arr_type.length; d++){
       arr_type[d].checked = false
    }
    for(let e = 0; e < arr_sex.length; e++){
        arr_sex[e].checked = false
    }
    rend(0)
}

function Check(index, type){
    rend(0)
    act_filt_type = type
    
    for(let i = 0; i < arr_type.length; i++){
        if(i === index){
            if(arr_type[i].classList.contains('emp')){
                arr_type[i].classList.toggle('emp')
                rend(3)
            }else{
                arr_type[i].classList.add('emp')
                rend(0)
            }  
        }else{
            arr_type[i].checked = false
            arr_type[i].classList.add('emp')
        }
    }
}

function CheckS(index, sex){
    rend(0)
    act_filt_sex = sex

    for(let i = 0; i < arr_sex.length; i++){
        if(i === index){
            if(arr_sex[i].classList.contains('emp')){
                arr_sex[i].classList.toggle('emp')
                rend(4)
            }else{
                arr_sex[i].classList.add('emp')
                rend(0)
            }  
        }else{
            arr_sex[i].checked = false
            arr_sex[i].classList.add('emp')
        }
    }
}

function ButCol(index, color){
    rend(0)
    act_filt_col = color

    for(let i = 0; i < arr_color.length; i++){
        if(i === index){
            if(arr_color[i].classList.contains('colors')){
                arr_color[i].classList.toggle('colors')
                arr_color[i].classList.toggle('border')
                rend(2)
            }else {
                arr_color[i].classList.toggle('colors')
                arr_color[i].classList.toggle('border')
            }
        }else{
            if(arr_color[i].classList.contains('border')){
                arr_color[i].classList.toggle('colors')
                arr_color[i].classList.toggle('border')
            }
        }  
    }
}

function But38(index, size){
    rend(0)
    active_filtr = size

    for(let i = 0; i < arr_but.length; i++){
        if(i === index){
            if(arr_but[i].classList.contains('white')){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
                rend(1)
            }else {
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
            }
        }else {
            if(arr_but[i].classList.contains('black')){
                arr_but[i].classList.toggle('black')
                arr_but[i].classList.toggle('white')
            }
        }  
    }
}

function rend(x){
    let cards = []

    if(x === 1){
        data.map((element)=>{
            let remainder = element.size
            for(let i = 0; i < remainder.length; i++){
                if(remainder[i] === active_filtr){
                    cards.push(element)      
                }
            }
        })
        
    }else if(x===2){
        data.map((element)=>{
            let remainder = element.color
            for(let i = 0; i < remainder.length; i++){
                if(remainder[i] === act_filt_col){
                    cards.push(element)     
                }
            }
        })  
    }else if(x===3){
        data.map((element)=>{
            let remainder = element.type
            for(let i = 0; i < remainder.length; i++){
                if(remainder[i] === act_filt_type){
                    cards.push(element)     
                }
            }
        })
        
    }else if(x===4){
        data.map((element)=>{
            let remainder = element.sex
            for(let i = 0; i < remainder.length; i++){
                if(remainder[i] === act_filt_sex){
                    cards.push(element)     
                }
            }
        }) 
    }else if(x===0){
        let list = document.querySelector('.catalog')
        list.innerHTML = ' '
    }
    if(cards.length >= 1){
        cards.map((el)=>{
            let card0 = document.createElement('div')  
            let list = document.querySelector('.catalog')
            card0.classList.add('card')
            card0.innerHTML = `
                                <img src="/img/${el.icon}" alt="">
                                <p>${el.name}</p>
                                <button><img src="/img/Button125.png" alt=""></button>`
            list.append(card0)
        })
    }
}
let bg1 = document.querySelector('.bg1')
bg1.addEventListener("click", ()=>{But38(0, 38)});
let bg2 = document.querySelector('.bg2')
bg2.addEventListener("click", ()=>{But38(1, 39)});
let bg3 = document.querySelector('.bg3')
bg3.addEventListener("click", ()=>{But38(2, 40)});
let bg4 = document.querySelector('.bg4')
bg4.addEventListener("click", ()=>{But38(3, 41)});
let bg5 = document.querySelector('.bg5')
bg5.addEventListener("click", ()=>{But38(4, 42)});
let bg6 = document.querySelector('.bg6')
bg6.addEventListener("click", ()=>{But38(5, 43)});
let bg7 = document.querySelector('.bg7')
bg7.addEventListener("click", ()=>{But38(6, 44)});
let bg8 = document.querySelector('.bg8')
bg8.addEventListener("click", ()=>{But38(7, 45)});
let bg9 = document.querySelector('.bg9')
bg9.addEventListener("click", ()=>{But38(8, 46)});
let bg10 = document.querySelector('.bg10')
bg10.addEventListener("click", ()=>{But38(9, 47)});

let c1 = document.querySelector('.c1')
c1.addEventListener("click", ()=>{ButCol(0, RED)});
let c2 = document.querySelector('.c2')
c2.addEventListener("click", ()=>{ButCol(1, BLUE)});
let c3 = document.querySelector('.c3')
c3.addEventListener("click", ()=>{ButCol(2, GREY)});
let c4 = document.querySelector('.c4')
c4.addEventListener("click", ()=>{ButCol(3, YELLOW)});
let c5 = document.querySelector('.c5')
c5.addEventListener("click", ()=>{ButCol(4, DARK_GREY)});
let c6 = document.querySelector('.c6')
c6.addEventListener("click", ()=>{ButCol(5, BLACK)});
let c7 = document.querySelector('.c7')
c7.addEventListener("click", ()=>{ButCol(6, BROWN)});
let c8 = document.querySelector('.c8')
c8.addEventListener("click", ()=>{ButCol(7, GREEN)});
let c9 = document.querySelector('.c9')
c9.addEventListener("click", ()=>{ButCol(8, BEIGE)});
let c10 = document.querySelector('.c10')
c10.addEventListener("click", ()=>{ButCol(9, DARK_BROWN)});

let ch0 = document.querySelector('.ch0')
ch0.addEventListener("click", ()=>{Check(0, CASUAL_SHOES)});
let ch1 = document.querySelector('.ch1')
ch1.addEventListener("click", ()=>{Check(1, RUNNERS)});
let ch2 = document.querySelector('.ch2')
ch2.addEventListener("click", ()=>{Check(2, HIKING)});
let ch3 = document.querySelector('.ch3')
ch3.addEventListener("click", ()=>{Check(3, SNEAKER)});
let ch4 = document.querySelector('.ch4')
ch4.addEventListener("click", ()=>{Check(4, BASKETBALL)});
let ch5 = document.querySelector('.ch5')
ch5.addEventListener("click", ()=>{Check(5, GOLF)});
let ch6 = document.querySelector('.ch6')
ch6.addEventListener("click", ()=>{Check(6, OUTDOOR)});

let ch7 = document.querySelector('.ch7')
ch7.addEventListener("click", ()=>{CheckS(0, MAN)});
let ch8 = document.querySelector('.ch8')
ch8.addEventListener("click", ()=>{CheckS(1, WOMAN)});

