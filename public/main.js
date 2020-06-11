const { app, BrowserWindow, globalShortcut } = require('electron')

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 2000, height: 600,
   transparent:false,
        frame:true,
        icon: __dirname + "/icon.png",
        autoHideMenuBar:true,
        titleBarStyle: 'customButtonsOnHover',
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        },});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  contents = mainWindow.webContents
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    createShortcuts()
  } 
  mainWindow.on('closed', () => mainWindow = null);
}
function toggleDevTools() {
  contents.toggleDevTools()
}

function createShortcuts() {
  globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});