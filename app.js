alert("Checking Addition");
var a=5;
var b=10;
var c=a+b;
alert(c);

    // enter value
alert("Checking Prompt");
var x="Enter Value";
var y="Your Value Is:"
var a=+prompt(x,y);
var b=a+10;
alert("The Output Is"+" "+b)

        // age program
alert("Checking Age Program");
var age=+prompt("Enter Your Age");
if(age==14){
    alert("Your Is Equal!")
}        
else if(age<14){
    alert("Your Age Is Less")
}
else{
    alert("Your Age Is More")
}

        // short program
alert("Checking Short Program");
var age=+prompt("Enter Your Age:");
var gender=prompt("Enter Your Gender:");
if(age>=18 && gender=="male"){
    alert("You Are Allowed To Ride!!!!")
}
else{
    alert("You Are NOT Allowed To Ride")
}

        // cnic program
alert("CNIC Program");
var age=+prompt("Enter Your Age:");
if(age<18){
alert("You can't apply for cnic")
}
else{
    alert("You can apply for Cnic!!!!!!")
}

        // count 100
document.write("count for 100"+"<br>");
for(var a=1; a<=100; a=a+10){
    for(var b=a; b<=a+9; b++){
        document.write(b+"  ");
    }
    document.write("<br>")
}

        // Find your Grade
alert("find out your grade by entering your percentage");
var per=+prompt("Enter Your Percentage");
if(per>=80 && per<=100){
    alert("Grade A+")
}
else if(per>=70 && per<=80){
    alert("Grade A")
}
else if(per>=60 && per<=70){
    alert("Grade B")
}
else if(per>=50 && per<=60){
    alert("Grade C")
}
else if(per>=40 && per<=50){
    alert("Grade D")
}
else if(per>=33 && per<=40){
    alert("Grade E")
}
else if(per>=1 && per<=33){
    alert("Your Are Fail")
}
else{
    alert("YOur Enter A Wrong Percentage");
}


        // table 45 
alert("Table 45");
for(var i=0 ; i<=10 ; i++){
document.write( `45 x ${i} = ${45*i} <br> <br>`);
}
        

        // table 
alert("Table");
var  a=+prompt("Enter Your Table Number");
for(var i=0 ; i<=10 ; i++){
    document.write( `${a} x ${i} = ${a*i} <br> <br>`);
}


        // line
for(var i=0; i<=5; i++){
    document.write("*"+"<br>");
}


        // square
for(var i=0; i<=5; i++){
for(var j=0; j<=5; j++){
document.write("*")
}
document.write("<br>");
}


     // pyramid
for(var i=0; i<=5; i++){
for(var j=0; j<=i; j++){
document.write("*")
}
document.write("<br>");
}

// down pyramid
for(var i=9; i>=1; i--){
    for(var j=i; j>=1; j--){
    document.write("*")
    }
    document.write("<br>");
    }

    for(var i=9; i>=1; i--){
        for(var j=i; j>=1; j--){
        document.write(i+" ")
        }
        document.write("<br>");
        }

        for(var i=9; i>=1; i--){
            for(var j=i; j>=1; j--){
            document.write(j+" ")
            }
            document.write("<br>");
            }


     // triangle
for(var i=1; i<=9; i++){
for(var k=1; k<=(9-i); k++){
document.write("&nbsp");
}
for(var j=1; j<=i; j++){
document.write("*");
}
document.write("<br>");
}




for(var i=1; i<=5; i++){
    for(var j=4; j>=i; j--){
    document.write('&nbsp');
    }
    for(var k=1; k<=i; k++){
    document.write(i+" ");
    }
    document.write("<br>");
    }



    for(var i=1; i<=5; i++){
        for(var j=1; j<=i; j++){
        document.write('&nbsp');
        }
        for(var k=4; k>=i; k--){
        document.write("*");
        }
        document.write("<br>");
        }


        // diamond
for(var i=1; i<=10; i++){
    for(var j=9; j>=i; j--){
    document.write('&nbsp');
    }
    for(var k=1; k<=i; k++){
    document.write("*");
    }
    document.write("<br>");
    }

    for(var i=1; i<=10; i++){
        for(var j=1; j<=i; j++){
        document.write('&nbsp');
        }
        for(var k=9; k>=i; k--){
        document.write("*");
        }
        document.write("<br>");
        }