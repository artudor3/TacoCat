function getString() {
    let inputString = document.getElementById("inputString").value;
    if (inputString != "") {

        let returnObj = checkIfPalindrome(inputString)

        displayData(inputString, returnObj);

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Type a message and try again',
        });
    }
}

function checkIfPalindrome(string) {
    let reversedString = '';
    let isPalindrome = false;
    let returnObj = {};

        string = string.toLowerCase();
        string = string.replace(/[^a-zA-Z0-9]/g, "");


    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];

    }
    if (reversedString !== string) {
        isPalindrome = false;
    }
    else {
        isPalindrome = true;
    }
    returnObj["isPalendrome"] = isPalindrome;
    returnObj["revString"] = reversedString;
    return returnObj;
}

function displayData(input, ) {
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