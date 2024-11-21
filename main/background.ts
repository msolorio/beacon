import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import { StartupTimer } from './startupTimer';
import { MainWindow } from './mainWindow';

const startupTimer = new StartupTimer();
startupTimer.startTimer();

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

; (async () => {
  await app.whenReady().then(async () => {
    const mainWindow = new MainWindow();
    await mainWindow.loadWindow();

    startupTimer.endTimer();
    console.log(`Startup Time: ${startupTimer.durationInMillisecs} ms`);
    ipcMain.handle('get-startup-time', async () => startupTimer.durationInMillisecs);

    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  });
})()

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
