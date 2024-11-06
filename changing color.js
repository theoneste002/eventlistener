// const container=document.getElementsByClassName("container");
// container.addEventListener("click",()=>{
//     if(container.backgroundColor==="red"){
//     container.backgroundColor="blue"; 
//     }else{
//         container.backgroundColor="blue"; 
//     };
// });
const color=document.getElementById("color");
color.addEventListener("click",()=>{
    if(color.style.backgroundColor==="red"){
        color.style.backgroundColor="green"
    }else{
        color.style.backgroundColor="red"
    }

})
