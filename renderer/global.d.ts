export { };

declare global {
  interface Window {
    electron: {
      getStartupTime: () => Promise<number>;
    };
  }
}