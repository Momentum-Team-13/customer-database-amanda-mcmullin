//ensure accerss to data
console.log(customers)

//create main box for data
const customerList = document.querySelector('#customer-list')


//js to build for each customer
for (let customer of customers) {
    let customerElement = document.createElement('div')
    customerElement.classList.add('customer')
    let contentElement = document.createElement('article')
    contentElement.classList.add('customer_profile')


    //image
    let imageElement = document.createElement('img')
    imageElement.src = "http://placekitten.com/g/600/300"
    imageElement.alt = 'profile photo'
    imageElement.classList.add('img')
    contentElement.appendChild(imageElement)
    customerElement.appendChild(contentElement)


    //name 
    let nameElement = document.createElement('h3')
    nameElement.classList.add('h3')
    nameElement.innerText = `${customer.name.title}`
    // nameElement.innerText = `${customer.name(title) + customer.name(first) + customer.name(last)}`
    contentElement.appendElement(nameElement)



    //email address
    //street address
    //city, state, zip
    //dob mon date, year
    //customer since: mon, date, year

customerList.appendChild(customerElement)
}
