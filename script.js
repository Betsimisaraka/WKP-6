//The object


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

 const innerModal = document.querySelector('.inner-modal');
const outerModal = document.querySelector('.outer-modal');
const btnModal = document.querySelector('.btn-confirm');
const inputElement = document.querySelectorAll('input');
const spicy = document.querySelector('#spicy');
const vegetarian = document.querySelector('#vegetarian');


const handleFood = () => {

    let foodFiltered = [...foods];

    if (spicy.checked) {
        foodFiltered = foodFiltered.filter(food => food.spicy);
    }

    if (vegetarian.checked) {
        foodFiltered = foodFiltered.filter(food => food.vegetarian);
    }

    const myHtml = 
        foodFiltered.map(food => {
            return `
            <li class="list1">
                <p class="first">${food.title}</p>
                <p class="second">${food.price}</p>
                <button value="${food.id}" class="addbtn">Add</button>
            </li>`
        }).join('');

        list.innerHTML = myHtml;
}

spicy.addEventListener('change', handleFood);
vegetarian.addEventListener('change', handleFood);

//Filter the list to see only the vegetarian meals, or only the spicy ones
 

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

// const orders = [];
//  if (e.target.matches('button.addToOrder')) {   
//     const orderFood = e.target.closest('.food-item');
//     // Creating a new object for the order
//     const anOrder = {
//         id: orderFood.querySelector('.food').textContent,
//         title: orderFood.querySelector('.title').textContent,
//         price: orderFood.querySelector('.price').textContent
//     }
//     // Pushing the objects into the orders array
//     orders.push(anOrder);
//     const orderHtml = `   
//         <li class="food-item">
//             <div class="food" id="${anOrder.id}">
//                 <div>${anOrder.title}</div>
//                 <span>x1</span>
//                 <span class="price">${anOrder.price}</span>
//             </div>
//         </li>
//     `;


//Open modal 
const openModal = () => {
    innerModal.innerHTML = `
    <div class="modal">
        <h2>Thanks for ordering</h2>
        <p>
            Your order is comfirmed
        </p>
        <p>The total amount is:  </p>
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
