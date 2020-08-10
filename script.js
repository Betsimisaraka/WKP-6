//The object
const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const btnModal = document.querySelector('.btn-confirm');
const inputElement = document.querySelectorAll('input');
const checkbox1 = document.querySelector('#spicy');
const checkbox2 = document.querySelector('#vegetarian');

const foods = [
	{
		id: 'ravitoto',
		price: 5000,
		title: 'Ravitoto',
		spicy: true,
		vegetarian: false,
	},
	{
		id: 'pasta',
		price: 4000,
		title: 'Pasta',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 'burger',
		price: 5000,
		title: 'Burger',
		spicy: false,
		vegetarian: false,
	},
	{
		id: 'rice',
		price: 2000,
		title: 'Rice and Leaves',
		spicy: false,
		vegetarian: true,
	},
	{
		id: 'mofogasy',
		price: 500,
		title: 'Mofogasy',
		spicy: false,
		vegetarian: false,
	},
];
// Maps, Filter, Reduce, and other friends
// See a list of five meal options
// To generate any list of element (for example, the list of food), Map is really useful.
 const list = document.querySelector('.items');
const handleFood = () => {
    const myHtml = foods.map(food => `
        <li class="list1" data-id="${food.id}">
            <p class="first">${food.title}</p>
            <p class="second">${food.price}</p>
            <button class="addbtn">Add</button>
        </li>`).join('');

    list.innerHTML = myHtml;
}

handleFood();

//Filter the list to see only the vegetarian meals, or only the spicy ones
 
checkbox1.addEventListener('change', function () {
    if (this.checked) {
        const myfood = foods.filter(food => food.spicy);
        const mySpicyFood = myfood.map(item =>
                `
            <li class="list-items">
                <p class="first">${item.title}</p>
                <p class="second">${item.price}</p>
                <button>Add</button>
            </li>`).join('');
            list.innerHTML = mySpicyFood;
        console.log(mySpicyFood);
    } else {
        handleFood();
    }
});

checkbox2.addEventListener('change', function () {
    if (this.checked) { 
        const myVegetarian = foods.filter(food => food.vegetarian)
        const myVegetarianFood = myVegetarian.map(items =>
                  `
            <li class="list-items">
                <p class="first">${items.title}</p>
                <p class="second">${items.price}</p>
                <button>Add</button>
            </li>`).join('');

        list.innerHTML = myVegetarianFood;
    } else {
        handleFood();
    }
});

inputElement.forEach(Element => Element.addEventListener('change', function () {
    if (checkbox1.checked && checkbox2.checked) {
        const bothVegSpic = foods.filter(food => food.spicy && food.vegetarian);
        const myBothFood = bothVegSpic.map(items =>
                `
            <li class="list-items value="${items.id}">
                <p>${items.title}</p>
                <p>${items.price}</p>
                <button>Add</button>
            </li>`).join('');
            list.innerHTML = myBothFood;
    } 
}));

// Add a meal to the cart
// const orderList = document.querySelector('.order-list');
// const addbtn = e => {
//     e.preventDefault();
//     const meals = [];
//     if (e.target.matches('.addbtn')) {
//         const meal = e.target.closest('.items');
//         const id = meal.dataset.id;
//         const food = foods.find(singleRecipe => singleRecipe.id === id);
// 		const foodTitle = meal.querySelector('.first').textContent;
// 		const foodPrice = meal.querySelector('.second').textContent;
//             const newMeal = `
//             <li class="list3" data-id="${food}">
//                 <p>${foodTitle}</p>
//                 <p>${foodPrice}</p>
//             </li>`;
//             ;

//             meals.push(newMeal);

//             orderList.insertAdjacentHTML('afterbegin', meals)
        
//     }
// }

// window.addEventListener('click', addbtn);

//Open modal 
const openModal = () => {
    innerModal.innerHTML = `
    <div class="modal">
        <h2>Thanks for ordering</h2>
        <p>
            Your order is comfirmed
        </p>
        <p>The total amount is: </p>
	</div>
    `;
    outerModal.classList.add('open');
}

//Click outside to close modal 
const outsideClick = event => {
	const outside = !event.target.closest('.innermodal');
	if (outside) {
		outerModal.classList.remove('open');
	}
}

//Escape key to close moadal
const handleEscKey = (event) => {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
}

outerModal.addEventListener('click', outsideClick);

window.addEventListener('keydown', handleEscKey);

btnModal.addEventListener('click', openModal);
