function simpleInterest() {
    var p = parseFloat(document.getElementById("Profit").value);
    var r = parseFloat(document.getElementById("Rate").value);
    var n = parseFloat(document.getElementById("Number").value);
    r /= 100.0;
    var ans = (p*r*n).toFixed(6);
    document.getElementById("simpleInterestRes").innerHTML = "Simple Interest = "+ans+" BDT";
}

function compoundInterest() {
    var p = parseFloat(document.getElementById("Profit2").value);
    var r = parseFloat(document.getElementById("Rate2").value);
    var n = parseFloat(document.getElementById("Number2").value);
    r /= 100.0;
    var ans = Math.pow((1+r),n);
    ans *= p;
    ans -= p;
    ans = ans.toFixed(6);
    document.getElementById("compoundInterestRes").innerHTML = "Compound Interest = "+ans+" BDT";
}

function quadraticSolve() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var det = b*b-4*a*c;
    if (det < 0 || a == 0)
        document.getElementById("quadraticAns").innerHTML = "Undefined";
    else {
        var r1 = (-b+Math.sqrt(det))/(2*a);
        var r2 = (-b-Math.sqrt(det))/(2*a);
        document.getElementById("quadraticAns").innerHTML = "Root One = "+r1+" , Root Two = "+r2;
    }
}