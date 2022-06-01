//ensure accerss to data
console.log(customers)

//create main box for data
const customerList = document.querySelector('#customer-list')


//js to build for each customer
for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer', 'box')


    //image**WORKING**
    let imageElement = document.createElement('img')
    imageElement.src = `${customer.picture.large}`
    imageElement.alt = 'customer profile photo'
    imageElement.classList.add("br-100", "h4", "w4", "dib", "ba", "b--black-05", "pa2")
    customerElement.appendChild(imageElement)


    //name**WORKING** 
    let nameElement = document.createElement('h1')
    let firstName = `${customer.name.first[0].toUpperCase()}${customer.name.first.substring(1)}`
    let lastName = `${customer.name.last[0].toUpperCase()}${customer.name.last.substring(1)}`
    nameElement.classList.add("f3", "mb2")
    nameElement.innerText = `${firstName} ${lastName}`
    customerElement.appendChild(nameElement)


    //email address**WORKING**
    let emailElement = document.createElement('h2')
    emailElement.classList.add("f5", "fw4", "gray", "mt0")
    emailElement.innerText = `${customer.email}`
    customerElement.appendChild(emailElement)


    //address**WORKING**
    let addressElement = document.createElement('h2')
    let stateAbbr = (nameToAbbr(customer.location.state))
    addressElement.classList.add("f5", "fw4", "black", "mt0")
    // let stateAbbr = (customerState(customer.location.state))
    addressElement.innerText = `${customer.location.street.number} ${customer.location.street.name} \n ${customer.location.city}, ${stateAbbr} ${customer.location.postcode}`
    customerElement.appendChild(addressElement)


    //dob mon date, year**WORKING**
    let dobElement = document.createElement('h2')
    let dobFormat = moment(customer.dob.date).format("MMM D, YYYY")
    dobElement.classList.add("f5", "fw4", "black", "mt0")
    dobElement.innerText = `DOB: ${dobFormat}`
    customerElement.appendChild(dobElement)


    //customer since: mon, date, year**WORKING**
    let enrollElement = document.createElement('h2')
    let registeredFormat = moment(customer.registered.date).format("MMM D, YYYY")
    enrollElement.classList.add("f5", "fw4", "black", "mt0")
    enrollElement.innerText = `Customer since: ${registeredFormat}`
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