function addTwo() {
  var x = parseFloat(document.getElementById("add1").value);
  var y = parseFloat(document.getElementById("add2").value);
  document.getElementById("add").innerHTML = "Sum "+(x+y);
}

function addAll() {
  var x = document.getElementById("addbox").value;
  var arr = x.split(" ");
  var sum = 0.0;
  for (var i=0; i<arr.length; i++)
    sum += parseFloat(arr[i]);
  document.getElementById("addN").innerHTML = "Total Numbers : "+arr.length;
  document.getElementById("addAllRes").innerHTML = "Calculated Sum : "+sum;
}

function subTwo() {
  var x = parseFloat(document.getElementById("sub1").value);
  var y = parseFloat(document.getElementById("sub2").value);
  document.getElementById("sub").innerHTML = "Difference "+(x-y);
}

function mulTwo() {
  var x = parseFloat(document.getElementById("mul1").value);
  var y = parseFloat(document.getElementById("mul2").value);
  document.getElementById("mul").innerHTML = "Product "+x*y;
}

function mulAll() {
  var x = document.getElementById("mulbox").value;
  var arr = x.split(" ");
  var prod = 1.0;
  for (var i=0; i<arr.length; i++)
    prod *= parseFloat(arr[i]);
  document.getElementById("mulN").innerHTML = "Total Numbers : "+arr.length;
  document.getElementById("mulAllRes").innerHTML = "Calculated Product : "+prod;
}

function arMean() {
  var x = document.getElementById("arMeanInput").value;
  var arr = x.split(" ");
  var sum = 0.0;
  for (var i=0; i<arr.length; i++)
    sum += parseFloat(arr[i]);
  document.getElementById("arMeanN").innerHTML = "Total Numbers : "+arr.length;
  document.getElementById("arMeanRes").innerHTML = "Arithmetic Mean (μ) : "+(sum/arr.length);
}

function wMean() {
  var x = document.getElementById("wMeanValInput").value;
  var y = document.getElementById("wMeanWInput").value;
  var val = x.split(" ");
  var w = y.split(" ");
  var p = 0.0;
  for (var i=0; i<val.length; i++)
    p += parseFloat(val[i])*parseFloat(w[i]);
  var q = 0.0;
  for (var i=0; i<w.length; i++)
      q += parseFloat(w[i]);
  document.getElementById("wMeanN").innerHTML = "Total Numbers : "+val.length;
  document.getElementById("wMeanRes").innerHTML = "Weighted Mean (x̄) : "+(p/q);
}

function geoMean() {
  var x = document.getElementById("geoMeanInput").value;
  var arr = x.split(" ");
  var prod = 1.0;
  for (var i=0; i<arr.length; i++)
    prod *= parseFloat(arr[i]);
  document.getElementById("geoMeanN").innerHTML = "Total Numbers : "+arr.length;
  document.getElementById("geoMeanRes").innerHTML = "Geometric Mean (x̄g) : "+Math.pow(prod,(1.0/arr.length));
}

function harMean() {
  var x = document.getElementById("harMeanInput").value;
  var arr = x.split(" ");
  var sum = 0.0;
  for (var i=0; i<arr.length; i++)
    sum += 1/(arr[i]*1.0);
  document.getElementById("harMeanN").innerHTML = "Total Numbers : "+arr.length;
  document.getElementById("harMeanRes").innerHTML = "Harmonic Mean (H) : "+((arr.length*1.0)/sum);
}

function divTwo() {
  var x = parseFloat(document.getElementById("div1").value);
  var y = parseFloat(document.getElementById("div2").value);
  var quo = x/y;
  var rem = x%y;
  document.getElementById("div").innerHTML = "Quotient "+quo+" , Remainder "+rem;
}

function power() {
  var x = parseFloat(document.getElementById("base").value);
  var y = parseFloat(document.getElementById("power").value);
  document.getElementById("p").innerHTML = Math.pow(x,y);
}

function powerTen() {
  var x = parseFloat(document.getElementById("powerten").value);
  document.getElementById("pt").innerHTML = Math.pow(10.0,x);
}

function inversePower() {
  var x = parseFloat(document.getElementById("baseI").value);
  var y = parseFloat(document.getElementById("powerI").value);
  document.getElementById("ip").innerHTML = Math.pow(x,(1.0/y));
}

function logarithm() {
    var x = parseFloat(document.getElementById("nL").value);
    var a = Math.log10(x);
    var b = Math.log(x);
    document.getElementById("lg").innerHTML = "log("+x+") = "+a;
    document.getElementById("ln").innerHTML = "ln("+x+") = "+b;
}

function piVal() {
    document.getElementById("pi").innerHTML = Math.PI;
}

function nTimesPi() {
    var x = parseFloat(document.getElementById("nPi").value);
    document.getElementById("npi").innerHTML = Math.PI*x;
}

function nTable() {
    var x = parseInt(document.getElementById("ntable").value);
    document.getElementById("mulTableRes1").innerHTML = x+" x 1 = "+x;
    document.getElementById("mulTableRes2").innerHTML = x+" x 2 = "+x*2;
    document.getElementById("mulTableRes3").innerHTML = x+" x 3 = "+x*3;
    document.getElementById("mulTableRes4").innerHTML = x+" x 4 = "+x*4;
    document.getElementById("mulTableRes5").innerHTML = x+" x 5 = "+x*5;
    document.getElementById("mulTableRes6").innerHTML = x+" x 6 = "+x*6;
    document.getElementById("mulTableRes7").innerHTML = x+" x 7 = "+x*7;
    document.getElementById("mulTableRes8").innerHTML = x+" x 8 = "+x*8;
    document.getElementById("mulTableRes9").innerHTML = x+" x 9 = "+x*9;
    document.getElementById("mulTableRes10").innerHTML = x+" x 10 = "+x*10;
}

function getDigit() {
  var n = document.getElementById("digitNumber").value;
  var l = n.length;
  var k = 0;
  for (var i=0; i<l; i++)
  {
    if (n[i] != '0' && n[i] != '-')
    {
      document.getElementById("nDig").innerHTML = l-i;
      break;
    }
  }
}
