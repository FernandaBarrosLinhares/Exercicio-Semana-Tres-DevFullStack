    
        break;
    case  "model":
        registerModel(resObj.model, resObj.brand);
        break
    case "vehicle":
        registerCar(
            resObj.model,
            resObj.brand,
            resObj.km,
            res.obj.value,
            resObj.color
        );
        break;
    default:
        console.log("Sem tag ou tag incorreta")
    }
};
