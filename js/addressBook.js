var submitButton = document.getElementById('submit');
var contactName = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var output = document.getElementById('form-output');
var listOfNames = '';
var addressBook = [];
var parent = document.getElementById('list-output');
// var deleteUser = document.getElementById('delete');

submitButton.addEventListener('click',function(e){

    e.preventDefault();
  
    var contact = {
        name: contactName.value, 
        emailAddress: email.value,
        phoneNumber : phone.value,
    }

    addressBook.push(contact);  

    sessionStorage.setItem('contact', JSON.stringify(addressBook));

    var contactDetails = JSON.parse(sessionStorage.contact);
    contactDetails.forEach(function(element, index, array){
        listOfNames = "<li class ='contact-name'><span class ='listname'><a href='editbook.html?name="+element.name+"'>" + element.name + "  </a></span> <span class='listbutton'><button class='deleteContact' data-id = "+index+">DELETE</button></span></li>";
    });

    parent.innerHTML += listOfNames;

    function clear(){
        contactName.value ='';
    }

    clear();
});

parent.addEventListener('click', function(e){
    if(e.target.classList.contains('deleteContact')){
        parent.innerHTML = "";
        
        var contactID = e.target.getAttribute('data-id');
        var contactDetailss = JSON.parse(sessionStorage.contact);
       var contactLeft = contactDetailss.splice(contactID,1);
       contactLeft.forEach(function(element, index, array){
        listOfNames = "<li class ='contact-name'><span class ='listname'><a href='editbook.html?name="+element.name+"'>" + element.name + "  </a></span> <span class='listbutton'><button class='deleteContact' data-id = "+index+">DELETE</button></span></li>";
        });
    parent.innerHTML += listOfNames;
       
    }
});

    // console.log('hey');


  