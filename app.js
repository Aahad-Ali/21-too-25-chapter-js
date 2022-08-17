function save() {

    var arr1 = [];
    var arr2 = [];
    var vowel = false;
    var user = document.getElementById("user").value;
    for (var i = 0; i < user.length; i++) {
        if (user[i] == "a" || user[i] == "e" || user[i] == "i" ||
            user[i] == "o" || user[i] == "u" || user[i] == "A" ||
            user[i] == "E" || user[i] == "I" || user[i] == "O" || user[i] == "U") {

            vowel = true;
        }
    }
    if (vowel == true) {
        arr1.push(user);
    }
    else {
        arr2.push(user);
    }


    for (var j = 0; j < arr2.length; j++) {

        document.getElementById("normal").innerHTML += "<li>"
            + arr2[j] +
            "</li>"
    }

    for (var k = 0; k < arr1.length; k++) {

        document.getElementById("vowels").innerHTML += "<li>"
            + arr1[k] +
            "</li>"
    }

}

/* <div class="row">


<form action="">
    <center>
        <div class="contanier">
            <h1> <i> Vowels/Normal Words</i></h1>
        </div>
        <input type="text" name="" id="user" placeholder="Enter words"><br>
        <input type="text" name="" id="vowels" placeholder="Vowels words"><br>
        <input type="text" name="" id="normal" placeholder="Normal words"><br><br>
        <button onClick="save()" id="click">add Words</button><br><br>

        <img src="https://www.bing.com/th?id=OIP.y1Di-i7rZBc7fL6m-KcFRgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt=""><label
            class="link">Facebook</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src="https://th.bing.com/th/id/OIP.A_QLZ7Y9nBwaWnkhCbvGmQHaHZ?w=199&h=198&c=7&r=0&o=5&pid=1.7"
            alt=""><label class="link">Twitter</label>
    </center>

</form>
</div> */
 



// function addword() {
//     var userInput = document.getElementById("userinput").value;
//     var userValue = userInput.toLowerCase();
//     var vowels = [];
//     var consonants = [];
//     var boolean = false;
    
//     for(i = 0; i < userValue.length; i++){
//         if(userValue[i] === "a" || userValue[i] === "e" || userValue[i] === "i" || userValue[i] === "o" || userValue[i] === "u" ){   
//             boolean = true;break;
//         }
//     }
//     if(boolean === true){
//         vowels.push(userInput);
//     }
//     else{
//         consonants.push(userInput);
//     }
//     for(j = 0; j < vowels.length; j++){
//         document.getElementById("vowelwords").innerHTML += "<li>"+ vowels[j] + "</li>";
//     }
//     for(k = 0; k < consonants.length; k++){
//         document.getElementById("consonantwords").innerHTML += "<li>"+ consonants[k] + "</li>";
//     }
// }