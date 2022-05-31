//ensure accerss to data
console.log(customers)

//create main box for data
const customerList = document.querySelector('#customer-list')


//js to build for each customer
for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer')
    let contentElement = document.createElement('article')
    contentElement.classList.add("mw5", "center", "bg-white", "br3", "pa3", "pa4-ns", "mv3", "ba", "b--black-10")


    //image**WORKING - BUT NEEDS HUMAN IMAGE!!!!***
    let imageElement = document.createElement('img')
    imageElement.src = "http://placekitten.com/g/600/300"
    imageElement.alt = 'profile photo'
    imageElement.classList.add("br-100", "h4", "w4", "dib", "ba", "b--black-05", "pa2")
    customerElement.appendChild(imageElement)



    //name**WORKING** 
    let nameElement = document.createElement('h1')
    nameElement.classList.add("f3", "mb2")
    nameElement.innerText = `${customer.name.first} ${customer.name.last}`
    customerElement.appendChild(nameElement)


    //email address**WORKING**
    let writeElement = document.createElement('h2')
    writeElement.classList.add("f5", "fw4", "gray", "mt0")
    writeElement.innerText = `${customer.email}`
    customerElement.appendChild(writeElement)

    //street address
    //city, state, zip
    //dob mon date, year
    //customer since: mon, date, year

customerList.appendChild(customerElement)
}


// HTML
// <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
//   <div class="tc">
//     <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you">
//     <h1 class="f3 mb2">Mimi W.</h1>
//     <h2 class="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
//   </div>
// </article>