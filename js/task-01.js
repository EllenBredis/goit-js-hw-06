const categoriesEl=document.querySelectorAll('.item');
console.log(`Number of categories:${categoriesEl.length}`);

for( let el of categoriesEl){
const categoriesName= el.querySelector('h2').textContent;
const categoriesLiength= el.querySelectorAll('li').length;

console.log(`Category: ${categoriesName}`);
console.log(`Elements: ${categoriesLiength}`);
}
