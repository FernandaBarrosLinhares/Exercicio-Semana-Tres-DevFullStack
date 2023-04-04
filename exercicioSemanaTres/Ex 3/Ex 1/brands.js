

//Crie uma variavél no escopo global para armazenar as marcas que serão cadastradas pela função.
//Crie uma função para cadastrar a marca de um veículo.
//Como parâmetro receba o nome da marca
//Chame a função e cadastre pelo menos três veículos
//A cada cadastro IMPRIMA uma mensagem "Marca cadastrada com sucesso!"
//Após a chamada imprima as marcas cadastradas//<==

const carBrands = [];
 

function registerBrand (brand){
    carBrands.push (brand);
    console.log ("Marca ${brand} cadastrada com sucesso");
}

for (let i = 1; i <= 3; i++) {
    registerBrand(`Marca ${i}`);
}   


console.log(carBrands);



