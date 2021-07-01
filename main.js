// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, globalShortcut } = require('electron')
const config = require('./config')

let mainWindow;
// const path = require('path')

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle:'hidden',
    alwaysOnTop:true,
    webPreferences: {
      nodeIntegration: true
      // preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  // mainWindow.loadFile('index.html')
  // PARA INICIAR USO npx lite-server
  mainWindow.loadURL(config.url)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// FUNÇÃO PARA ABRIR O DEVTOOLS
function toggleDevTools(){
    mainWindow.webContents.openDevTools()
}

// Cria atalhos no Electron
function createShortcuts(){
    globalShortcut.register('CmdOrCtrl+j', toggleDevTools)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algumas APIs podem ser usadas somente depois que este evento ocorre.
// app.whenReady().then(() => {
//   createWindow()

//   app.on('activate', function () {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })
app.whenReady()
.then(createWindow)
.then(createShortcuts)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. Você também pode colocar eles em arquivos separados e requeridos-as aqui.
