function math(){
    a=Number(document.my_cal.first.value);
    b=Number(document.my_cal.second.value);
    c=a*b;
    document.my_cal.mul.value=c;
  
    d=a+b;
    document.my_cal.add.value=d;
 
    e=a-b;
    document.my_cal.sub.value=e;
  

    f=a/b;
    document.my_cal.div.value=f;
  }
  function popup(){
    alert("JS alert box");


  }
  function Min_Max(){
    var numOne, numTwo, numThree, numFour, numFive, sum;
    one = parseInt(document.my_calc.firstnum.value);
    two = parseInt(document.my_calc.secondnum.value);
    three = parseInt(document.my_calc.thirdnum.value);
    four = parseInt(document.my_calc.fourthnum.value);
    five = parseInt(document.my_calc.fifthnum.value);
    let a = Math.max(one, two, three, four, five);
    let b = Math.min(one, two, three, four, five);
    const random = [one, two, three, four, five];
    var index = Math.floor(Math.random() *random.length);
    c = random[index];
    document.my_calc.a.value = a;
    document.my_calc.b.value = b;
    document.my_calc.c.value = c;
  }
  

