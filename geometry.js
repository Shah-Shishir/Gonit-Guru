function simpleAreaTriangle () {
    let b = parseFloat(document.getElementById('b1').value);
    let height = parseFloat(document.getElementById('h1').value);
    document.getElementById('ans').innerHTML = 0.5 * b * height;
}

function areaByHeron () {
    let a = parseFloat(document.getElementById('ah').value);
    let b = parseFloat(document.getElementById('bh').value);
    let c = parseFloat(document.getElementById('ch').value);
    let s = (a+b+c)/2.0;
    let ans = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    document.getElementById('ansh').innerHTML = ans;
}

function areaOfIsosceles() {
  let a = parseFloat(document.getElementById('ai').value);
  let b = parseFloat(document.getElementById('bi').value);
  let ans = Math.sqrt(4*a*a-b*b);
  ans *= b/4.0;
  document.getElementById('ansi').innerHTML = ans;
}

function areaOfEquilateral() {
  let a = parseFloat(document.getElementById('ae').value);
  let ans = Math.sqrt(3)*a*a;
  ans /= 4.0;
  document.getElementById('anse').innerHTML = ans;
}

function area() {
  let a = parseFloat(document.getElementById('aC').value);
  let b = parseFloat(document.getElementById('bC').value);
  let x = parseFloat(document.getElementById('AC').value);
  x *= Math.PI;
  x /= 180.0;
  let ans = 0.5 * a * b * Math.sin(x);
  document.getElementById('ansC').innerHTML = ans;
}

function rectangleArea() {
  let a = parseFloat(document.getElementById('aR').value);
  let b = parseFloat(document.getElementById('bR').value);
  let ans = a*b;
  document.getElementById('rA').innerHTML = ans;
}

function rectanglePerimeter() {
  let a = parseFloat(document.getElementById('aR').value);
  let b = parseFloat(document.getElementById('bR').value);
  let ans = 2*(a+b);
  document.getElementById('rP').innerHTML = ans;
}

function rectangleDiagonal() {
  let a = parseFloat(document.getElementById('aR').value);
  let b = parseFloat(document.getElementById('bR').value);
  let ans = Math.sqrt(a*a+b*b);
  document.getElementById('rD').innerHTML = ans;
}

function squareArea() {
  let a = parseFloat(document.getElementById('aS').value);
  let ans = a*a;
  document.getElementById('sA').innerHTML = ans;
}

function squarePerimeter() {
  let a = parseFloat(document.getElementById('aS').value);
  let ans = 4*a;
  document.getElementById('sP').innerHTML = ans;
}

function squareDiagonal() {
  let a = parseFloat(document.getElementById('aS').value);
  let ans = Math.sqrt(2)*a;
  document.getElementById('sD').innerHTML = ans;
}

function parallelogramArea() {
  let b = parseFloat(document.getElementById('bP').value);
  let h = parseFloat(document.getElementById('hP').value);
  let ans = b*h;
  document.getElementById('pA').innerHTML = ans;
}

function specialParallelogramArea() {
  let d = parseFloat(document.getElementById('dPC').value);
  let h = parseFloat(document.getElementById('hPC').value);
  let ans = d*h;
  document.getElementById('sPA').innerHTML = ans;
}

function rhombusArea() {
  let d1 = parseFloat(document.getElementById('d1').value);
  let d2 = parseFloat(document.getElementById('d2').value);
  let ans = 0.5*d1*d2;
  document.getElementById('RA').innerHTML = ans;
}

function trapeziumArea() {
  let aT = parseFloat(document.getElementById('aT').value);
  let bT = parseFloat(document.getElementById('bT').value);
  let hT = parseFloat(document.getElementById('hT').value);
  let ans = 0.5*(aT+bT)*hT;
  document.getElementById('TA').innerHTML = ans;
}
