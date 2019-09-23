function yes() {
    document.getElementById("verdict").innerHTML = "Correct Answer!";
    document.getElementById("verdict").style.color = "green";
    document.getElementById("points").innerHTML = "You have got 5 points.";
    document.getElementById("points").style.color = "green";
    /*document.getElementById("totalpoints").innerHTML = "Total Points : "+100;
    document.getElementById("totalpoints").style.color = "skyblue";*/
    document.getElementById("b3").style.display = "block";
    return 5;
}

function no() {
    document.getElementById("verdict").innerHTML = "Wrong Choice!";
    document.getElementById("verdict").style.color = "red";
    document.getElementById("points").innerHTML = "You have got no points.";
    document.getElementById("points").style.color = "red";
    /*document.getElementById("totalpoints").innerHTML = "Total Points : "+100;
    document.getElementById("totalpoints").style.color = "skyblue";*/
    document.getElementById("b3").style.display = "block";
    return 0;
}
