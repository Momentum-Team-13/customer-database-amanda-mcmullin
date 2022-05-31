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
    let emailElement = document.createElement('h2')
    emailElement.classList.add("f5", "fw4", "gray", "mt0")
    emailElement.innerText = `${customer.email}`
    customerElement.appendChild(emailElement)

    //address**WORKING**
    let streetElement = document.createElement('h2')
    streetElement.classList.add("f5", "fw4", "black", "mt0")
    streetElement.innerText = `${customer.location.street.number} ${customer.location.street.name} \n ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`
    customerElement.appendChild(streetElement)

    //dob mon date, year**WORKING - NEEDS TO BE FORMATTED**
    let dobElement = document.createElement('h2')
    dobElement.classList.add("f5", "fw4", "black", "mt0")
    dobElement.innerText = `DOB: ${customer.dob.date}`
    customerElement.appendChild(dobElement)

    //customer since: mon, date, year**WORKING - NEEDS TO BE REFORMATTED**
    let enrollElement = document.createElement('h2')
    enrollElement.classList.add("f5", "fw4", "black", "mt0")
    enrollElement.innerText = `Customer since: ${customer.registered.date}`
    customerElement.appendChild(enrollElement)

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