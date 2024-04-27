const {app,BrowserWindow} = require('electron')
const url = require ("url")
const path = require('path')
function createMainWindow(){
    const mainWindow = new BrowserWindow({
        title : "Electron",
        width : 1000,
        height : 600,
        icon: path.join(__dirname,'app/public/logo512.ico'),
        autoHideMenuBar:true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            
          },
    })
    mainWindow.setMenu(null);

mainWindow.webContents.openDevTools()
    const startUrl = url.format({
        pathname : path.join(__dirname, './app/build/index.html'),
        protocol:'file',
        slashes: true

    })
    console.log(startUrl); // This will print the full file path in the console

    mainWindow.loadURL(startUrl)
}
app.whenReady().then(createMainWindow)
// Add event listeners...
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });