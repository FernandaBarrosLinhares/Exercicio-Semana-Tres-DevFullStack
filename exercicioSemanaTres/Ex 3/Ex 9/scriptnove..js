const carBrands = [];
const carModel = [];
// const cars = [];
const cars = [
    {
        model:"Modelo1",
        brand: "Marca 1",
        km: 15000,
        value: 450000
        color:"preto",
        image: null,
        },

     {
        model:"Modelo2",
        brand: "Marca 1",
        km: 30000,
        value: 55000
        color:"prata",
        image: null,
     },

    {
        model:"Modelo3",
        brand: "Marca 2",
        km: 19000,
        value: 400000
        color:"preto",
        image: null,
        },
        {
        model:"Modelo4",
        brand: "Marca 3",
        km: 22200,
        value: 22000
        color:"vermelho",
        image: null,
    };
];

 
function registerBrand (brand){
    carBrands.push (brand);
console.log (getAllCars) //nao tenho certeza se é assim

return cars;
}
function displayCars(){
    const cars = getAllCars ();

    for(const car of cars){
        document.querySelector(".container").appendChild(createCard(car));
    }
}
function createCard (car){
    const card = document.createElement("div");
    card.classList= "card";
    card.innerHTML = 
        <img
        scr= "https://cdn.motor1.com/images/mgl/y2g73l/s3/chrysler-airflow-concept.jpg"
        alt = "Imagem carro"
        />
    <p class ="model">${car.model} - <span class= "brand" >${car.brand} </span></p>
    <p class = "color">${car.color}</p>
    <div class="flex mt">
            <p class= "km">${car.km}km</p>
            <p class= "value">R$${car.value}</p> 
    </div>
    ;
    retur card;
    }

    displayCars();