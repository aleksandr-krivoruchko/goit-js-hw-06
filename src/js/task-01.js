// Categories
const itemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsEl.length}`);


//! по старинке
// for (let i = 0; i < itemsEl.length; i+=1) {
// 	console.log(`Category: ${itemsEl[i].firstElementChild.textContent}`);
//    console.log(`Elements: ${itemsEl[i].lastElementChild.querySelectorAll('li').length}`);
// }


const qwe = itemsEl.forEach(item => {
	console.log(`Category: ${item.firstElementChild.textContent}`);
	console.log(`Elements: ${item.lastElementChild.querySelectorAll('li').length}`);
})