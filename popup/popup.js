console.log("popup") 

const file = document.querySelector("#file")
const txt = "www"
let params = {
    active: true,
    currentWindow: true
}

file.addEventListener('click', () => {

    chrome.tabs.query(params, (tabs) => {
        console.log(txt)
        chrome.tabs.sendMessage(tabs[0].id, txt)
    })

})

