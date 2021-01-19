/*let userNumber=+prompt("Write your number");

 for (let i=1;i<=userNumber; i++){
     if (i%5===0){

         console.log(i);

     }else{
         console.log("sorry no numbers");

     }


}*/

//доп задание
//пункт первый

/*let userNumber=+prompt("Write your number ");


while(!Number.isInteger(userNumber)){
    +prompt("Write your number");
}*/




//второй и  тд.
let m=+prompt("write your first number");
let n=+prompt("write your second number");

nextPrime:
for (let i=m;i<=n; i++){

    for (let j=m; j<i; j++){
        if (i%j===0) continue nextPrime

        }console.log(i)
}


