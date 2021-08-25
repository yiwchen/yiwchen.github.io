const cc_hello = "Hello!"
// Declare global variables and assign values for test purpose


function ccIsEmpty(array_of_string) {
    if (array_of_string.length == 1 && array_of_string[0] == "") {
        return true;
    } else {
        return false;
    }
}

function cc_Generate() {
    cc_type_of_job = document.getElementById("cc-job-type").value;
    cc_age = document.getElementById("cc-age").value;
    cc_name = document.getElementById("cc-name").value;
    cc_hp = document.getElementById("cc-hp").value;
    cc_src = document.getElementById("cc-src").value;
    cc_ep = document.getElementById("cc-ep").value;
    cc_mp = document.getElementById("cc-mp").value;
    cc_md = document.getElementById("cc-md").value;


    content = "Name: " + cc_name + "\n" + "Age: " + cc_age + "\n" + "Job: " + cc_type_of_job + "\n" + "Health Points: " + cc_hp + "\n" + "Energy Points: " + cc_ep + "\n" + "Mathemagic Power: " + cc_mp + "\n" + "Mathemagic Defense: " + cc_md + "\n";

    var cccardcode = document.getElementById("cc-card")
    cccardcode.innerText = content;
    document.getElementById("cc-pic").setAttribute("src", cc_src)
}

function ccctc() {
    // for copy to clipboard use
    var tempText = document.createElement('textarea');
    tempText.value = document.getElementById("cc-card").innerText;
    /*    tempText.style.visibility = 'hidden';*/
    document.body.appendChild(tempText);
    tempText.select();
    document.execCommand("copy");
    document.body.removeChild(tempText);
    alert("Copied the text: \n" + tempText.value);
}