const data = [{
    "name": "DROPSET TRAINER SHOES Blue",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "green"],
    "price": 125,
    "icon": "Frame 14.png",
    "page": "product_page.html",
    "id": 0
},
{
    "name": "ULTRABOOST 1.0 MIAMI Green",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": "green",
    "price": 125,
    "icon": "tr1.png",
    "id": 1
},
{
    "name": "ADIDAS OZELIA SHOES Green",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": "green",
    "price": 125,
    "icon": "tr2.png",
    "id": 2
},
{
    "name": "ADIDAS 4DFWD 2 RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["orange", "green"],
    "price": 125,
    "icon": "tr3.png",
    "id": 3
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr4.png",
    "id": 4
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr5.png",
    "id": 5
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr6.png",
    "id": 6
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr7.png",
    "id": 7
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr8.png",
    "id": 8
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 41, 42, 43, 44, 45, 46, 47],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr9.png",
    "id": 9
}]

const page={
    'trainlist': document.querySelector('.train_list')
}

data.map((element)=>{
    if(element.id <=3){
    let card = document.createElement('li')
        card.innerHTML = `  <img src="/img/${element.icon}" alt="">
                            <div>${element.name}</div>
                            <a href="${element.page}"><button><img src="/img/Button (2).png" alt=""></button></a>`
        page.trainlist.append(card)
    }
})


var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

document.querySelector('#a').addEventListener("click", Show_all);
document.querySelector('#b').addEventListener("click", Go_back);

function Show_all(){
    let sw = document.querySelector('.reviews_swiper')
    let all = document.querySelector('.reviews_cont')
    let but_1 = document.querySelector('.show_all')
    let but_2 = document.querySelector('.go_back')
    let pic = document.querySelector('.swipe')
    sw.classList.remove('show')
    all.classList.add('show')
    but_1.classList.remove('show')
    but_2.classList.add('show')
    pic.classList.remove('show')
}  

function Go_back(){
    let sw = document.querySelector('.reviews_swiper')
    let all = document.querySelector('.reviews_cont')
    let but_1 = document.querySelector('.show_all')
    let but_2 = document.querySelector('.go_back')
    let pic = document.querySelector('.swipe')
    sw.classList.add('show')
    all.classList.remove('show')
    but_1.classList.add('show')
    but_2.classList.remove('show')
    pic.classList.add('show')
}