function registerBrand(brand){
    const carBrands= JSON.parse(localStorage.getItem("carBrands")) || [];
    carBrands.push(brand);
    console.log(`Marca ${brand} cadastrada com sucesso!`);
    console.log(carBrands);
    localStorage.setItem("carBrands", JSON.stringify (carBrands));

}
function registerModel(model,brand){
    const carModels= JSON.parse(localStorage.getItem("carModels")) || [];
    carModels.push({model, brand});
    console.log(`Modelo ${model} cadastrada com sucesso!`);
    console.log(carModels);
    localStorage.setItem("carModels", JSON.stringify (carModels));

}

function registerCar(model, brand, km, value,color){
    const cars= JSON.parse(localStorage.getItem("cars"))  || [];
    cars.push
    model,
    brand,
};
    console.log("Veiculo cadsatrado com sucesso");
    console.log(cars);
    localStorage.setItem("cars".JSON.stringify(cars));


function displayCars(){

}