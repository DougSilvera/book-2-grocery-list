const groceries= [
    {
        id: 1,
        item: "Milk",
        price: 3.99,
    },
    {
        id: 2,
        item: "Eggs",
        price: 4.99,

    },
    {
        id: 3,
        item: "Pizza Rolls",
        price: 8.99
    },
    {
        id: 4,
        item: "Whole Chicken",
        price: 12.99
    },
    {
        id:5,
        item: "Bananas",
        price: 4.99  
    },
    {
        id: 6,
        item: "sandwich buns",
        price: 4.99
    },
    {
        id: 7,
        item: "ketchup",
        price:5.99
    }

]

// console.log(groceries)

const addItemToList = (itemObject) => {
    const lastIndex= groceries.length - 1
    const currentLastItem = groceries[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1
    itemObject.id = idForNewItem
    groceries.push(itemObject)}


const whippedCream = {
    item: "whipped cream",
    price: 6.49,
    dateCreated: "11/19/2021 12:12pm" 
}

const strawberries = {
    item: "strawberries",
    price: 7.67,
    dateCreated: "11/19/2021 12:14pm"
}

const crackers= {
    item: "ritz crackers",
    price: 8.99,
    dateCreated: "11/19/2021 12:15pm"
}

const ribeye = {
    item: "ribeye steaks",
    price: 15.99,
    dateCreated: "11/19/2021 12:16pm"
}

const wine = {
    item: "red wine",
    price: 12.99,
    dateCreated: "11/19/2021 12:28pm"
}

addItemToList(whippedCream)
addItemToList(strawberries)
addItemToList(crackers)
addItemToList(ribeye)
addItemToList(wine)

const minimumPrice = 8
for (grocery of groceries) {
    if (grocery.price >= minimumPrice)
console.log(` ${grocery.item},${grocery.price}`)
}