import { createRoot } from 'react-dom/client';
import TailwindTest from '../components/TestComponent';
import './App.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<TailwindTest />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
