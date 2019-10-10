const {app, BrowserWindow} = require('electron')
let win = null

function boot() {

    win = new BrowserWindow({
        width : 800,
        height : 500,
        resizable : false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.setMenu(null)
    // win.webContents.openDevTools()
    win.loadURL(`file://${__dirname}/index.html`)

}



app.on('ready', boot)