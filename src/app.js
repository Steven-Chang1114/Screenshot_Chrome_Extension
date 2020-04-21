import html2canvas from "html2canvas"

//Receive msg from background
chrome.runtime.onMessage.addListener((request, sender, sendRequest) => {
    if(request === "screenshot"){
        html2canvas(document.body).then(canvas => { 

        //Took screenshot
        var image = new Image();
        //document.body.appendChild(image);
        image.src = canvas.toDataURL("image/png");
        image.id = "facial"
        var output=image.src
    
        //Autosave to the local folder
        const anchor = document.createElement('a');
        anchor.download = "img.png";
        anchor.href = output;
        anchor.click()
    
    });
    }
})
