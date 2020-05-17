const { app, BrowserWindow } = require('electron');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#FFFFFF',
        title: 'Xtreme Success',
        icon: `file://${__dirname}/dist/xtreme-success-electron/assets/logo.png`
    });

    win.loadURL(`file://${__dirname}/dist/xtreme-success-electron/index.html`);
    // Dev Tools
    win.webContents.openDevTools();

    //Event after window is closed
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win == null) {
        createWindow();
    }
})