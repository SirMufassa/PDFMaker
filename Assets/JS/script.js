const { BrowserWindow } = require ('electron').remote
// var ipc = electron.ipcRenderer;


window.addEventListener('load', () => {
    var toastOffline = '<span> Open your internet connetion </span';
    navigator.onLine ? console.log("Connecting...") :  M.toast({
        html: toastOffline,
        classes: 'rounded empty'
    })
})

//the click event when trying to make a pdf
document.getElementById('pdfBtn').addEventListener('click', () => {

    var toastEmpty = '<span> Empty field </span';
    var toastInvalid = '<span> Invalid field </span';
    var toastOffline = '<span> Open your internet connetion </span';

    if(navigator.onLine) {

        var expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        var regex = new RegExp(expression);
        var link = document.getElementById('link').value;

        if(link == ""){

            M.toast({
                html: toastEmpty,
                classes: 'rounded empty'
            })

        } else{
            if(regex.test(link)){
                //make pdf
            } else{

                M.toast({
                    html: toastInvalid,
                    classes: 'rounded empty'
                })

            }
        }
    }

    else{

        M.toast({
            html: toastOffline,
            classes: 'rounded empty'
        })
    }
    
})

document.getElementById('link').addEventListener('keypress', () => {
    document.getElementById('pdfBtn').classList.add("pulse");
})

document.getElementById('settings').addEventListener('click', () => {
    let win = new BrowserWindow({ 
        width: 300, 
        height: 190,
        resizable : false 
    });

    win.setMenu(null);
    // win.webContents.openDevTools();
    win.loadURL(`file://${__dirname}/about.html`);
})

//the main method to make a pdf from URL
function pdfMaker(){

}