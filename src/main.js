const { app, BrowserWindow, Menu, ipcMain, screen } = require('electron');
const path = require('path');
// const usbDetection = require('usb-detection');
let mainWindow;

// const expectedHash = '070D34651CC1C079';

function createWindow() {
   // Get the primary display's screen size
   const primaryDisplay = screen.getPrimaryDisplay();
   const { width, height } = primaryDisplay.workAreaSize; // Excludes taskbar and dock areas
 
  mainWindow = new BrowserWindow({
    width,    // Set the width to the screen's width
    height,   // Set the height to the screen's height
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    icon: path.join(__dirname, '../icon.ico')
  });

  mainWindow.setMenu(null);

  mainWindow.loadFile(path.join(__dirname, 'home.html')).catch(err => {
    console.error('Failed to load index.html:', err);
  });

  mainWindow.webContents.on('context-menu', (event, params) => {
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Inspect Element',
        click: () => {
          mainWindow.webContents.inspectElement(params.x, params.y);
        }
      }
    ]);
    contextMenu.popup(mainWindow);
  });
  
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

}

ipcMain.handle('get-screen-info', () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.size;
  return { width, height };
});

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});
