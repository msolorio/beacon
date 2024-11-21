import path from 'path'
import { createWindow } from './helpers'

class MainWindow {
  private _window: Electron.BrowserWindow;

  constructor() {
    this._window = createWindow('main', {
      width: 1000,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    })
  }

  public async loadWindow() {
    if (process.env.NODE_ENV === 'production') {
      await this._window.loadURL('app://./home')
    } else {
      const port = process.argv[2]
      await this._window.loadURL(`http://localhost:${port}/home`)
    }
  }
}

export { MainWindow };