document.getElementById('button').addEventListener('click',loadCustomer);
function loadCustomer(e){
  let getData = new XMLHttpRequest();
  getData.open('GET', 'customer.json',true);
  getData.onload = function(){
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText)
      console.log(customer)
      const output = `
        <ul>
        <li>ID: ${customer.id}</li>
        <li>Company : ${customer.company}</li>
        <li>Name: ${customer.name}</li>
        <li>Phone # : ${customer.phone}</li>
        </ul>
      `
      document.getElementById('output').innerHTML = output
    }
  }
  getData.send();
}


document.getElementById('button2').addEventListener('click',loadCustomers);
function loadCustomers(){
  let groupData = new XMLHttpRequest();
  groupData.open('GET','Customers.json');
  groupData.onload = function(){
    let spreadSheet = JSON.parse(this.responseText);
    console.log(spreadSheet)
    for (var i = 0; i < spreadSheet.length; i++) {
      const output = `
        <ul>
          <li>${spreadSheet[i].id}</li>
          <li>${spreadSheet[i].company}</li>
          <li>${spreadSheet[i].name}</li>
          <li>${spreadSheet[i].phone}</li>
        </ul>
      `
      document.getElementById('Customers').innerHTML += output;
    }
  }
  groupData.send();
}
