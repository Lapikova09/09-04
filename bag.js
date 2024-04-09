const data = [{
    "name": "DROPSET TRAINER SHOES Blue",
    "size": [38, 39],
    "color": ["blue", "grey"],
    "price": 125,
    "icon": "Frame 14.png",
    "page": "product_page.html",
    "id": 0,
    "type": ["outdoor", "runners"],
    "sex" : ['man']

},
{
    "name": "ULTRABOOST 1.0 MIAMI Green",
    "size": [39, 40, 41],
    "color": ["red", "green"],
    "price": 125,
    "icon": "tr1.png",
    "id": 1,
    "type": ["outdoor", "runners"],
    "sex" : ['man', 'woman']
},
{
    "name": "ADIDAS OZELIA SHOES Green",
    "size": [ 38, 40, 43, 44],
    "color": ["green"],
    "price": 125,
    "icon": "tr2.png",
    "id": 2,
    "type": ["outdoor"],
    "sex" : ['man']
},
{
    "name": "ADIDAS 4DFWD 2 RUNNING SHOES",
    "size": [ 41,42],
    "color": ["red", "dark grey"],
    "price": 125,
    "icon": "tr3.png",
    "id": 3,
    "type": ["outdoor", "runners"],
    "sex" : ['woman']
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [ 42, 45, 47],
    "color": ["grey"],
    "price": 125,
    "icon": "tr4.png",
    "id": 4,
    "type": ["outdoor"],
    "sex" : ['man']
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [43, 45, 46],
    "color": ["black", "yellow"],
    "price": 125,
    "icon": "tr5.png",
    "id": 5,
    "type": ["outdoor"],
    "sex" : ['man']
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [39, 40, 44],
    "color": ["dark grey", "white"],
    "price": 125,
    "icon": "tr6.png",
    "id": 6,
    "type": ["outdoor", "runners"],
    "sex" : ['man']
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [45, 46],
    "color": ["blue", "black"],
    "price": 125,
    "icon": "tr7.png",
    "id": 7,
    "type": ["outdoor"],
    "sex" : ['man']
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [ 40, 46],
    "color": ["blue", "white"],
    "price": 125,
    "icon": "tr8.png",
    "id": 8,
    "type": ["outdoor", "runners"],
    "sex" : ['woman']
},
{
    "name": "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    "size": [38, 44, 47],
    "color": ["grey", "white"],
    "price": 125,
    "icon": "tr9.png",
    "id": 9,
    "type": ["outdoor"],
    "sex" : ['man']
}]

let cardArrayS = []

let bagHtml = document.querySelector('.your_bag')

let sum = 0
let summary = document.querySelector('.summary_')
let quan = 0
let quantity = document.querySelector('.quantity')
let total = 0
let total1 = document.querySelector('.total1')

function bag(number){
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`<img src="/img/${data[number].icon}" alt="">
    <div class="card_text">
        <div class="prize">
            <p>${data[number].name}</p>
            <p class="purp">${data[number].price} $</p>
        </div>
        <p class="grey">Men’s Road Running Shoes</p>
        <p class="grey">Enamel Blue/ University White</p>
        <div class="size_quan">
            <p class="grey">Size 10</p>
            <button><img src="/img/chevron_down.png" alt=""></button>
            <p class="grey">Quantity 1</p>
            <button><img src="/img/chevron_down.png" alt=""></button>
        </div>
        <div class="like">
            <button><img src="/img/heart.png" alt=""></button>
            <button><img src="/img/Bin.png" alt=""></button>
        </div>
    </div>`

    cardArrayS.push(card.innerHTML)
    localStorage.setItem('test', JSON.stringify(cardArrayS))

    bagHtml.append(card)

    sum = sum + Number(data[number].price)
    localStorage.setItem('summa', JSON.stringify(sum))
    summary.innerHTML = `${Number(sum)}$`

    quan = quan + 1
    localStorage.setItem('quant', JSON.stringify(quan))
    quantity.innerHTML = `${Number(quan)} ITEM`

    total = 6.99 + sum
    localStorage.setItem('total', JSON.stringify(total))
    total1.innerHTML = `${total}$`

}

function renderCard(){
    cardArrayS.map((el)=>{
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = el
        bagHtml.append(card)
    })
}

function loadData(){
    cardArrayS = JSON.parse(localStorage.getItem('test'))
    sum = JSON.parse(localStorage.getItem('summa'))
    quan = JSON.parse(localStorage.getItem('quant'))
    total = JSON.parse(localStorage.getItem('total'))
}

data.map((element)=>{
    if(element.id < 4){
    let card = document.createElement('li')
    let list = document.querySelector('.train_list')
        card.innerHTML = `  <img src="/img/${element.icon}" alt="">
                            <div>${element.name}</div>
                            <button ><img src="/img/Button (2).png" alt=""></button>`
                            card.addEventListener("click", ()=>{bag(element.id)});
        list.append(card)
    }
})

if(localStorage.length>=1){
    loadData()
    renderCard()
}

summary.innerHTML = `${Number(sum)}$`
quantity.innerHTML = `${Number(quan)} ITEM`
total1.innerHTML = `${Number(total)}$`