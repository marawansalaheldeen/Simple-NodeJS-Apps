window.onload = ()=>{
    const weatherform = document.querySelector('form')
    const cityname = document.getElementById('addresssearchbutton')
    const location = document.getElementById('address');

    const messageone = document.getElementById('mone')
    const messagetwo = document.getElementById('mtwo')
    cityname.addEventListener('click',(event)=>{
        const city = location.value;
        event.preventDefault()
        messageone.textContent = "Loading...."
        messagetwo.textContent = ""
    fetch('/weather?address='+city).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageone.textContent = data.error
        } else {
            messageone.textContent = data.location
            messagetwo.textContent = data.forecast 
        }
    })
})
    })
}