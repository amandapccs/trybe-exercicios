let ingredientItems = [
    '500g de feijão',
    '1 concha de óleo',
    '1 Cebola média picada',
    '4 dentes de alho',
    '1 colher de sopa de sal com alho',
    '100g de farinha de mandioca'
]


let ingredientList = document.querySelector('.ingredients-list');

for (let index = 0; index < ingredientItems.length; index+= 1) {
    let ingredient = ingredientItems[index];

    let ingredientListItem = document.createElement('li');
    ingredientListItem.innerText = ingredient;

    ingredientList.appendChild(ingredientListItem)
}