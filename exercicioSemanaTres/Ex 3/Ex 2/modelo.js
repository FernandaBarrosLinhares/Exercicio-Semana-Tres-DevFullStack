//Crie uma variável no escopo global para armazenar os modelos que serão cadastradas
// Crie a função para cadastrar um Modelo de Veículo.
// Como parâmetro receba o nome do modelo e o nome da marca
// A cada cadastro imprima uma mensagem "Modelo cadastrado com sucesso!"
// Após a chamada imprima os veículos cadastrados

const carBrands = [];
const carModel = [];


function registerBrand (brand){
    carBrands.push (brand);
    console.log ('Marca ${brand} cadastrada com sucesso!');
}

function registerModel (model, brand){
    carModels.push ({model, brand});
    console.log ('Modelo ${model} cadastrado com sucesso!');
}

for(let i= 1; i<=3; i++){
    registerBrand(`Marca${i}`)
    registerModel(`Model ${i}`, `Marca ${Math, round (1/2)}`)  

}

console.log(carBrands);
console.log(carModels);


registerBrand(`marca1`);
registerBrand(`Fmarca2`);
registerBrand(`marca3 `);





















