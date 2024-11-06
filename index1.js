function handleSum() {
        const num1 = (document.getElementById('num1').value);
        const num2 = (document.getElementById('num2').value);
        const resultContainer = document.getElementById("result")
        console.log(num1 === "")
        if (num1 === "") {
            return resultContainer.innerHTML = "please provide num1 in the input"
        
        }
        if (num2 === "") {
            return resultContainer.innerHTML = "please provide num2 in the input"
            
        }
        const sum = parseInt(num1) + parseInt(num2);
        resultContainer.innerHTML = `The sum is:  ${sum}`;
    
    }
    