function getString() {
    let inputString = document.getElementById("inputString").value;
    if (inputString != "") {

        inputString = inputString.toLowerCase();
        inputString = inputString.replace(/[^a-zA-Z0-9]/g, "");

        let revStr = getData(inputString);
        let isPalindrome = checkIfPalindrome(inputString, revStr)
        displayData(inputString, revStr, isPalindrome);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a message and try again',
        });
    }
}

function checkIfPalindrome(string, revStr) {
    let reversedString = '';
    string = string.toLowerCase();

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];

    }
    return string === revStr;
}

function displayData(input, revStr, isPal) {
    document.getElementById("msg").innerHTML = `Your entered string is: <span class="fw-bold">${input}</span>`;
    document.getElementById("msg").innerHTML += `<p>The string reversed is: <span class="fw-bold">${revStr}</span></p>`;
    if (isPal) {
        document.getElementById("alertMsg").innerHTML = "It's a Palindrome!";
        //if TRUE, change message color to green
        document.getElementById("alert").classList.remove('alert-danger');
        document.getElementById("alert").classList.add('alert-success');
    } else {
        document.getElementById("alertMsg").innerHTML = "It is not...";
        //if FALSE, change message color to red
        document.getElementById("alert").classList.remove('alert-success');
        document.getElementById("alert").classList.add('alert-danger');
    }
    document.getElementById("alert").classList.remove('d-none');


}