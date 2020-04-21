import html2canvas from "html2canvas"
console.log("FR&A starts")

//Receive msg from background
chrome.runtime.onMessage.addListener((request, sender, sendRequest) => {
    console.log(request)
    console.log("eede")
    if(request === "screenshot"){
        // html2canvas(document.body).then(canvas => {
    //     const text = document.createElement('h1');
    //     text.textContent = "Successful"
    //     text.style.color = "#888888;"
    //     text.style.textAlign = "center";
    //     document.body.appendChild(text);  

    //     //Took screenshot
    //     var image = new Image();
    //     //document.body.appendChild(image);
    //     image.src = canvas.toDataURL("image/png");
    //     image.id = "facial"
    //     var output=image.src
    
    //     //Autosave to the local folder
    //     const anchor = document.createElement('a');
    //     anchor.download = "img.png";
    //     anchor.href = output;
    //     anchor.click()
    
    // });
    }
})
