/*

//TASK 1.1
let age=+prompt("How old are you?");
if (age<=2){    
        alert("child");}

if (18<=age>=12){    
        alert("teen");}

if (18>=age<=60){    
            alert("adult");}

if (age>=60){    
            alert("pensioner");}


//TASK 1.2
let num = +prompt("Enter number");
switch(num){
  
    case 1:
        alert("!");
        break;
    case 2:
        alert("@");
        break;
    case 3:
        alert("#");
        break;
    case 4:
        alert("$");
        break;
    case 5:
        alert("%");
        break;
    case 6:
        alert("^");
        break;
    case 7:
        alert("&");
        break;
    case 8:
        alert("*");
        break;
    case 9:
        alert("(");
        break;
    case 0:
            alert(")");
            break;}    


//TASK 1.3
let num = +prompt('Enter number');
arr=[];
arr=(('' + num).split('') );
if(arr[0].index=arr[1].index);{
    alert('1=2');}
else if
    (arr[0].index=arr[2].index);{
        alert('1=3');}
        долго не получалось, я сдалась


//TASK 1.4
let y=+prompt('Enter year')
if (y%4==0 && y%100==0; || y%400==0){
    alert('leap year');
}
else{
    alert('not leap year')
}

//TASK 1.5
 let num=+prompt('enter five-digit number');
arr1=(('' + num).split('').reverse());
arr2=(('' + num).split(''));
if(arr1==arr2){
    alert('palindrom');
}
else {
    alert('not palindrom')
}

//TASK 1.6
let dol =+prompt("Enter dollars");
let cur =prompt("Choose currency(eur, uan, azn)");
const eur=1;
const uan=36.54;
const azn=1.70;
if (cur=="eur"){
        alert(dol*eur);}
else if (cur=="uan"){
        alert(dol*uan);}
else if (cur=="azn"){
    alert(dol*azn);} 

    
//TASK 1.7
let sum=+prompt("Enter sum");
const three=0.03;
if (300<=sum,sum<=200){
    alert(sum-sum*three);
}
else if (500>=sum,sum<=300){
    alert(sum-sum*0.05);
}
else if (sum>=500,499<sum){
    alert(sum-sum*0.07);
}


//TASK 1.8
let p = +prompt("Enter p of square");
let L = +prompt("Enter L of circle");
 const pi=3.14;
//L=2*pi*r
//p=4*a
//a=2*r
//p=4r
//r=p/8
//r=(L/2)*pi => a=2((L/2)*pi) => p/4 = L*pi
if (p/4==L*pi){
    alert("Possible")
}
else{
    alert("impossible")
}
 


LocalDate date = LocalDate.now(); 
//TASK 1.9
let ques_1=+prompt('2+2');
let ques_2=+prompt('2+4');
let ques_3=+prompt('2+5');
let cnt =0;
if( ques_1==2){
    cnt +=2;}
else if ( ques_2==6){
    cnt +=6;}
else if ( ques_3==7){
        cnt +=8;}
alert(cnt);
//TASK 1.10
  day;
    month;
    year;
    year%4==0 && year%100=0;
    if (month == 2){
    if(day == 29){
    month += 1;
    day = 1;
    }
    else{
    day+1;
    }
}
    
    else if(month== 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 ||month == 12;
    if(day == 31){
    month += 1;
    day = 1;
    }
    else{day+=1;}

    else{
        if(day == 30){
        month+=1;
        day = 1;
        }
        else{
        dayt++;}


//TASK 2.1
let a=+prompt("Enter 1st number");
let b=+prompt("Enter 2nd number");
if(a<b){
    alert("-1");
}
else if(a>b){
    alert("1");
}
else if(a=b){
    alert("0");
}
//TASK 2.1(A)
let number=+prompt('Enter your number');
let result =1;
while(number !=0){
    result*=number;
    number --;
}
alert(result);
//TASK 2.2
let a = +prompt("Enter 1st number");
let b = +prompt("Enter 2nd number");
let c = +prompt("Enter 3rd number");
String(abc);
    abc = a+b+c;
    alert(abc);
//TASK 2.3
let a=+prompt('Enter first side');
let b=+prompt('Enter second side');
if (b>0){
    alert(a*b);
}
else if (b==0){
    alert( a*a);
}
else if (a==0){
    alert( b*b);
}
else if (b<0){
    alert("Incorrect" );
}
else if (a<0){
    alert("Incorrect" );
}

//TASK 2.4
//TASK 2.5
//TASK 2.6
let hours=+prompt('Enter hours  ');
let minutes=+prompt('Enter minutes');
let seconds=+prompt('Enter seconds');
alert(hours+':'+minutes+':'+seconds )
//TASK 2.7
let hours=+prompt('Enter hours  ');
let minutes=+prompt('Enter minutes');
let seconds=+prompt('Enter seconds');

 if(hours==0){
    alert("00"+':'+minutes+':'+seconds );
 }
 else if(minutes==0){
    alert(hours+':'+"00"+':'+seconds );
 }
 else if(seconds==0){
    alert(hours+':'+minutes+':'+"00");
 }
 else{
    alert(hours+':'+minutes+':'+seconds );
 }
//TASK 2.8
let hours=+prompt('Enter hours  ');
let minutes=+prompt('Enter minutes');
let seconds=+prompt('Enter seconds');
if(hours<0){
    alert('Incorrect');
}

else if(59<minutes<0){
    alert('Incorrect');
}
else if(59<seconds<0){
    alert('Incorrect');
}
else{
alert(hours*3600+minutes*60+seconds)}
//TASK 2.9
let seconds=+prompt('Enter seconds');
h=seconds%3600;
min=(seconds-h*60)%60;
sec=seconds-(60*min);
alert(h+':'+min+':'+sec);
//TASK 2.10

let h1=+prompt('Enter 1st hours');
let m1=+prompt('Enter 1st minutes');
let s1=+prompt('Enter 1st seconds');

let h2=+prompt('Enter 2nd hours');
let m2=+prompt('Enter 2nd minutes');
let s2=+prompt('Enter 2nd seconds');

sec1=Math.abs(h1*3600+m1*60+s1);
sec2=Math.abs(h2*3600+m2*60+s2);
diff=Math.abs(sec1-sec2); 
alert( dif_h+':'+dif_m+':'+dif_s);

dif_h=Math.abs(h1-h2)
dif_m=Math.abs(m1-m2)
dif_s=Math.abs(s1-s2)
alert("difference in seconds="+diff)
//TASK 2.11
let ques_1=+prompt('2+2');
let ques_2=+prompt('2+4');
let ques_3=+prompt('2+5');
let cnt =0;
if( ques_1==2){
    cnt +=2;
} 

}let day=+prompt('Enter day  ');
let mounth=+prompt('Enter mounth');
let year=+prompt('Enter year');
let d=+prompt('Enter day  ');
let m=+prompt('Enter mounth');
let y=+prompt('Enter year');
if(d>30 || m==4 || m==6 || m==9 || m==11){
    alert(d==1 + m+1);
}
else{
    alert(d+1+'.'+d +'.'+y);*/

  

  