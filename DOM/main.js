
//create new element and add to parent node/element.
// const ul = document.querySelector('ul')
// const li = document.createElement('li')
// li.className='product-collection-item'
// li.append(document.createTextNode('Charger'))
// ul.append(li)
// console.log(ul)


// replace/update an element text through parent node
// const oldHeading = document.querySelector('.h1')
// const createHeading = document.createElement('h1')
// createHeading.appendChild(document.createTextNode('Product Updated Info'))
// const parentEle  = document.querySelector('div')
// parentEle.replaceChild(createHeading,oldHeading)



// replace/update an element text through using that element
// const oldHeading = document.querySelector('.h1')
// const createHeading = document.createElement('h1')
// createHeading.appendChild(document.createTextNode('Product Updated Info'))
// oldHeading.replaceWith(createHeading)

// remove item/element using parent 
// one way
// const ul = document.querySelector('ul')
// ul.firstElementChild.remove();
// console.log(ul)

// second way
// const ul = document.querySelector('ul')
// ul.removeChild(ul.lastElementChild)
// console.log(ul)



// Event introducing

// const heading1 = document.querySelector('h1');
// const lis       = document.querySelectorAll('li');
// const form       = document.forms[0];
// for (const li of lis) {
//     li.addEventListener('click',eventListener) 
// }

// form.addEventListener('submit',eventListener) 
// function eventListener(evt){
//     evt.preventDefault();
//     console.log('type:',evt.type)
//     console.log('target:',evt.target.innerText)
//     console.log('offsetX:',evt.offsetX)
//     console.log('offsetX:',evt.offsetY)
//     console.log('type:',evt.type)
// }


// event bubbling
// const li = document.querySelector('.product-collection-item');
// const ul = document.querySelector('ul');
// const div = document.querySelector('div');

// li.addEventListener('click',function(){
//     console.log('li')
// })
// ul.addEventListener('click',function(){
//     console.log('ul')
// })
// div.addEventListener('click',function(){
//     console.log('div')
// })




// event delegation
// const div = document.querySelector('div');

// div.addEventListener('click',function(evt){
//     if(evt.target.id==='sample')
//     evt.target.className='custom'
// })


{/* <div class="container" id="container">
  <h1 class="h1">Product List</h1>
  <ul class="product-collection  mb-3">
    <li class="product-collection-item" id="sample">Shoes</li>
  </ul>
</div>  */}


// const div = document.createElement('div')
// const h1 = document.createElement('h1')
// const ul = document.createElement('ul')
// const li = document.createElement('li')

// div.className='container'
// div.id='container'

// h1.className='h1'
// h1.textContent='Product List'

// ul.className='product-collection'
// ul.classList.add('mb-3')

// li.className='product-collection-item'
// li.id='sample'
// li.appendChild(document.createTextNode('shoes'))

// div.appendChild(h1)
// div.appendChild(ul)
// ul.appendChild(li)
// console.log(div)












