// Crie uma lista no escopo global para armazenar os veiculos que serão cadastradas
// Chame a função para cadastrar o Veículo.
// Como parâmetro receba o nome do modelo, nome da marca e o nome do veículo, km, valor e cor.
// A cada cadastro imprima uma mensagem "Veículo cadastrado com sucesso!"
// Após a chamada imprima os veículos cadastrados
// Atividade

const cars = [];

function registerCar(model, brand, Km, value, color) {
    cars.push({
     model,
     brand,
     km,
     value,
     color,
    });
    console.log("Veiculo cadastrado com sucesso!!");
}

for (let i = 1; i <=3; i++) {
    registerBrand('Marca ${i}');
    registerModel('Modelo ${i}', 'Marca ${Math.round (i / 2)}');
    registerCar(
        'Modelo ${i}',
        ' Marca ${ Math,round(i / 2)}',
        20 * i,
        50000 - i * 10000,
        "preto"

    );
}

console.log(carBrands);
console.Log(CarModels);
cponsole.log(Cars);
    

