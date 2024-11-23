import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'

contextBridge.exposeInMainWorld('fs', {
  readFileTree: async () => ipcRenderer.invoke('fs:readFileTree'),
})

contextBridge.exposeInMainWorld('electron', {
  getStartupTime: () => ipcRenderer.invoke('get-startup-time')
});

const handler = {
  send(channel: string, ...args: Array<unknown>) {
    ipcRenderer.send(channel, ...args)
  },
  on(channel: string, callback: (...args: Array<unknown>) => void) {
    const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
      callback(...args)
    ipcRenderer.on(channel, subscription)

    return () => {
      ipcRenderer.removeListener(channel, subscription)
    }
  },
}

contextBridge.exposeInMainWorld('ipc', handler)

export type IpcHandler = typeof handler
