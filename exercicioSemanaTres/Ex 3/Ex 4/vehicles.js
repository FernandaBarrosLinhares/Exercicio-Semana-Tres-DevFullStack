//Crie uma função para listar os veículos cadastrados.
//O retorno dessa função DEVE ser um objeto javascript com as seguintes
//informações nome do modelo, nome da marca, nome do veículo, km, cor e valor.


function getAllCars() {
  return cars;
}

for (let i = 1; i <= 3; i++){
    registerBrand(`Marca ${i}`);
    registerModel (`Modelo ${i}`, `Marca ${Math.round (i / 2)}`);
}


console.log(carBrands);
console.log(carModel);
// console.log(cars);
console.log(getAllCars());
