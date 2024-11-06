const bodyElement =document.body
const mainElement =document.createElement("main")
bodyElement.appendChild(mainElement)
const buttonElement =document.createElement('button')
mainElement.appendChild(buttonElement)
buttonElement.innerText="click Me"
buttonElement.addEventListener("click", ()=>{
    buttonElement.innerText='how your are'
    console.log("Hello , Theo")
})