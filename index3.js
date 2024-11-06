let counter=0;

document.getElementById("work").innerHTML=counter;
const handleincrement = () =>{
    const counter1 = counter +=1;
  document.getElementById("work").innerHTML=counter1;
}
const hanledencrement2= () =>{
    const counter2 = counter -=1;
  document.getElementById("work").innerHTML=counter2;
}