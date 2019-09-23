function isPrime() {
  var n = parseInt(document.getElementById("N").value);
  if (n == 1)
  {
    document.getElementById("primeStatus").innerHTML = "1 is not prime by definition!";
  }
  else if (n == 2)
  {
    document.getElementById("primeStatus").innerHTML = "2 is Prime!";
  }
  else if (n % 2 == 0) {
    document.getElementById("primeStatus").innerHTML = n+" is not Prime. It is divisible by 2.";
  }
  else {
    var k = false;
    for (var i=2; i*i<=n; i++)
    {
      if (n % i == 0)
      {
        document.getElementById("primeStatus").innerHTML = n+" is not Prime. It is divisible by "+i+".";
        k = true;
        break;
      }
    }
    if (!k)
      document.getElementById("primeStatus").innerHTML = n+" is Prime!";
  }
}

function gcd_lcm() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var gcd=BigInt(1),lcm=BigInt(1),t=BigInt(1);
  var x = a, y = b;
  var p = BigInt(a);
  var q = BigInt(b);
  var z = BigInt(0);
  if (p == z)
    gcd = p;
  else if (q == z)
    gcd = q;
  else {
    while (q != z) {
      t = q;
      q = p % q;
      p = t;
      }
      gcd = p;
  }
  var lcm = BigInt((BigInt(BigInt(x)* BigInt(y)))/BigInt(gcd));
  document.getElementById("gcdRes").innerHTML = "GCD of "+x+" and "+y+" is "+gcd;
  document.getElementById("lcmRes").innerHTML = "LCM of "+x+" and "+y+" is "+lcm;
}

function divisors() {
  var n = parseInt(document.getElementById("divisorsN").value);
  var arr = [];
  for (var i=1; i*i<=n; i++)
  {
    if (n % i == 0)
    {
      if (i*i == n)
        arr.push(i);
      else {
        arr.push(i);
        arr.push(n/i);
      }
    }
  }
  arr.sort(function(a, b){return a - b});
  var s = arr.length;
  document.getElementById("divisorsNumber").innerHTML = "Total Divisors : "+s;
  document.getElementById("divisorsResult").innerHTML = "Divisors List : "+arr;
}

function clearDiv() {
  document.getElementById("divisorsN").value = null;
  var s = document.querySelector('label[id="divisorsNumber"]');
  s.textContent = null;
  s = document.querySelector('label[id="divisorsResult"]');
  s.textContent = null;
}

function primeDivisors() {
  var n = parseInt(document.getElementById("primeDivisorsN").value);
  var arr = [];
  if (n % 2 == 0)
  {
    arr.push(2);
    while (n % 2 == 0)
      n /= 2;
  }
  for (var i=3; i*i<=n; i+=2)
  {
    if (n % i == 0)
    {
      arr.push(i);
      while (n % i == 0)
        n /= i;
    }
  }
  if (n > 1)
    arr.push(n);
  var s = arr.length;
  document.getElementById("primeDivisorsNumber").innerHTML = "Total Prime Divisors : "+s;
  document.getElementById("primeDivisorsResult").innerHTML = "Prime Divisors List : "+arr;
}

function clearPrimeDiv() {
  document.getElementById("primeDivisorsN").value = null;
  var s = document.querySelector('label[id="primeDivisorsNumber"]');
  s.textContent = null;
  s = document.querySelector('label[id="primeDivisorsResult"]');
  s.textContent = null;
}

function primeInterval() {
  var m = 10000001,i,j,l,u;
  // Sieve of Eratosthenes
  var prime = [];
  var p = [];
  for (var i=0; i<m; i++)
    prime.push(false);
  prime[0] = prime[1] = true;
  for (i=3; i*i<=m; i+=2)
    if (!prime[i])
      for (j=i*i; j<=m; j+=2*i)
        prime[j] = true;
    l = parseInt(document.getElementById("number1").value);
    var x = l;
    u = parseInt(document.getElementById("number2").value);
    var y = u;
    if (l <= 2 && u >= 2)
      p.push(2);
    if (l % 2 == 0)
      ++l;
    if (u % 2 == 0)
      --u;
    for (i=l; i<=u; i+=2)
      if (!prime[i])
        p.push(i);
    document.getElementById("primeIntervalNumber").innerHTML = "There are "+p.length+" primes from "+x+" to "+y;
    document.getElementById("primeIntervalResult").innerHTML = "Prime list : "+p;
}

function clearPrimes() {
  document.getElementById("number1").value = null;
  document.getElementById("number2").value = null;
  var s = document.querySelector('label[id="primeIntervalNumber"]');
  s.textContent = null;
  s = document.querySelector('label[id="primeIntervalResult"]');
  s.textContent = null;
}

function factorial() {
    var n = parseInt(document.getElementById("nF").value);
    var fact = BigInt(1);
    for (var i=2; i<=n; i++)
      fact = fact * (BigInt(i));
    document.getElementById("facto").innerHTML = n+"! = "+fact;
}

function getFactorial(n) {
    var fact = BigInt(1);
    for (var i=2; i<=n; i++)
      fact = fact * (BigInt(i));
    return fact;
}

function perCom() {
    var n = parseInt(document.getElementById("n").value);
    var r = parseInt(document.getElementById("r").value);
    var nPr = getFactorial(n)/getFactorial(n-r);
    var nCr = nPr/getFactorial(r);
    document.getElementById("npr").innerHTML = "P(n,r) = n! / (n-r)! = "+n+"! / ("+n+"-"+r+")! = "+nPr;
    document.getElementById("ncr").innerHTML = "C(n,r) = n! / (r! * (n-r)!) = "+n+"! / ("+r+"! * ("+n+"-"+r+")!) = "+nCr;
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

function getDigitFact() {
  var n = parseInt(document.getElementById("digitFact").value);
  var arr = [];
  for (var i=0; i<n+7; i++)
    arr.push(0.0);
  for (var i=1; i<n+7; i++)
    arr[i] = Math.log10(i) + arr[i-1];
  var ans = Math.floor(arr[n])+1;
  document.getElementById("nDigFact").innerHTML = n+"! has "+ans+" digits.";
}

function decToOther() {
  var dec = parseInt(document.getElementById("dec").value);
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  var hex = dec.toString(16).toUpperCase();
  document.getElementById("fromDec").innerHTML = dec+" in Decimal = "+bin+" in Binary = "+oct+" in Octal = "+hex+" in Hexadecimal";
}

function binToOther() {
  var bin = parseInt(document.getElementById("bin").value);
  var dec = parseInt(bin,2);
  var oct = dec.toString(8);
  var hex = dec.toString(16).toUpperCase();
  document.getElementById("fromBin").innerHTML =  bin+" in Binary = "+dec+" in Decimal = "+oct+" in Octal = "+hex+" in Hexadecimal";
}

function octToOther() {
  var oct = parseInt(document.getElementById("oct").value);
  var dec = parseInt(oct,8);
  var bin = dec.toString(2);
  var hex = dec.toString(16).toUpperCase();
  document.getElementById("fromOct").innerHTML = oct+" in Octal = "+dec+" in Decimal = "+bin+" in Binary = "+hex+" in Hexadecimal";
}

function hexToOther() {
  var hex = document.getElementById("hex").value;
  var dec = parseInt(hex,16);
  var bin = dec.toString(2);
  var oct = dec.toString(8);
  document.getElementById("fromHex").innerHTML = hex+" in Hexadecimal = "+dec+" in Decimal = "+bin+" in Binary = "+oct+" in Octal";
}

function retIt (base,power,mod)
{
    var p1,p2;

    if (power == 0)
        return 1;
    else if (power % 2 == 1)
    {
        p1 = base % mod;
        p2 = (retIt (base, power-1, mod)) % mod;
        return (p1 * p2) % mod;
    }
    else if (power % 2 == 0)
    {
        p1 = (retIt (base, power/2, mod)) % mod;
        return (p1 * p1) % mod;
    }
}

function bigMod() {
    var b = parseInt(document.getElementById("b").value);
    var p = parseInt(document.getElementById("p").value);
    var m = parseInt(document.getElementById("m").value);
    var ans = retIt(b,p,m);
    document.getElementById("bmres").innerHTML = ans;
}

function reverse() {
    var n = document.getElementById("revn").value;
    var x = "";
    var n1 = "";
    var k = 0;

    for (var i=0; i<n.length; i++)
    {
        if (n[i] != '0')
          k = 1;

        if (k == 1)
          n1 += n[i];
    }

    for (var i=n1.length-1; i>=0; i--)
        x += n1[i];
    document.getElementById("rev").innerHTML = x;
}

function palCheck() {
    var n = document.getElementById("paln").value;
    var l = n.length, h = l/2;
    var k = 1;
    --l;

    for (var i=0; i<h; i++)
    {
        if (n[i] != n[l-i])
        {
            k = 0;
            document.getElementById("palRes").innerHTML = "Alas! "+n+" is not a Palindrome!";
            break;
        }
    }

    if (k)
        document.getElementById("palRes").innerHTML = "Hurrah! "+n+" is a Palindrome!";
}

function gcd(a, b) {
  if (b == 0)
    return a;
  else
    return gcd(b, a % b);
}

function lcmAll() {
  var x = document.getElementById("lcmbox").value;
  var arr = x.split(" ");
  for (var i = 0; i < arr.length; i++)
    arr[i] = parseInt(arr[i]);
  var l = arr[0];
  var g;
  for (var i = 1; i < arr.length; i++) {
    var g = gcd(l, arr[i]);
    l = (l / g) * arr[i];
  }
  document.getElementById("lcmN").innerHTML = "Total Numbers : " + arr.length;
  document.getElementById("lcmAllRes").innerHTML = "Calculated LCM : " + l;
}

function getTrailZeroes() {
    var x = parseInt(document.getElementById("trailzeroesN").value);
    var ans = 0;
    var p = x;
    while (x)
    {
      ans += Math.floor(x/5);
      x = Math.floor(x/5);
    }
    document.getElementById("trailzeroesans").innerHTML = "There are "+ans+" trailing zeroes in "+p+"!";
}
