export { };

declare global {
  interface Window {
    electron: {
      getStartupTime: () => Promise<number>;
    },
    fs: {
      readFileTree: () => Promise<string>;
    },
  }
}