const handleSum = () =>{
    const num1=document.getElementById("num1").value 
    const num2=document.getElementById("num2").value 
    const resultContainer=document.getElementById("result")
    resultContainer.innerHTML=`the summation is: ${parseInt(num1)+parseInt(num2)}`
}