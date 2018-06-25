function generateID() {
    let userFirstName = document.getElementById("firstName").value;
    console.log(userFirstName);
    document.getElementById("firstNameCard").innerHTML = userFirstName;

    let userLastName = document.getElementById("lastName").value;
    console.log(userLastName);
    document.getElementById("lastNameCard").innerHTML = userLastName;

    let userAge = document.getElementById("Age").value;
    console.log(userAge);
    document.getElementById("AgeCard").innerHTML = userAge;

    let userPhoneNumber = document.getElementById("PhoneNumber").value;
    console.log(userPhoneNumber);
    document.getElementById("PhoneNumberCard").innerHTML = userPhoneNumber;

    let userAddress = document.getElementById("Address").value;
    console.log(userAddress);
    document.getElementById("AddressCard").innerHTML = userAddress;
}
