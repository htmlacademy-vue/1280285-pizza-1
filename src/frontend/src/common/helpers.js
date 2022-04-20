export const COUNT = 0
export const MINCOUNT = 0
export const MAXCOUNT = 3
export const TEMPLATEPIZZA = {
    pizzaID: null,
    namePizza: '',
    dought: '',
    sauce: '',
    ing: {},
    ingPrice: 0,
    doughtPrice: 0,
    saucePrice: 0,
    totalPrice: 0,
    multiplier: 0,
    nameIng: '',
    doughtDesc: '',
    sizeDesc: '',
    sauceDesc: '',
    count: 1
}

// import Ingredients from "@/static/pizza.json";

export const ingObj = (obj) => {
    for (let i = 0; i < obj.length; i++) {
        let str = obj[i].image;
        let res = decodeURI(
            str.substring(str.lastIndexOf("/") + 1, str.length)
        );
        let resNew = res.substring(0, res.length - 4);
        obj[i]["class"] = resNew;
    }
    return obj
}


