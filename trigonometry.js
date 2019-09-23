function getSine() {
    var x = parseFloat(document.getElementById("s1").value);
    var y = parseFloat(document.getElementById("s2").value);
    document.getElementById("sine").innerHTML = "sinA = "+x/y;
}

function getCosine() {
    var x = parseFloat(document.getElementById("c1").value);
    var y = parseFloat(document.getElementById("c2").value);
    document.getElementById("cosine").innerHTML = "cosA = "+x/y;
}

function getTangent() {
    var x = parseFloat(document.getElementById("t1").value);
    var y = parseFloat(document.getElementById("t2").value);
    document.getElementById("tangent").innerHTML = "tanA = "+x/y;
}
