let Name=prompt("Write your name please");
let Age=+prompt("Write  your age please");

if (Age<18){
    alert("You are not allowed to visit this website");
}else if (Age >= 18 && Age<=22 ){
   let result = confirm("Are you sure you want to continue?");
   if (result){
       alert("Welcome " + Name);
   }else{
       alert("You are not allowed to visit this website");
   }

}else{
    alert("Welcome " + Name);
}

