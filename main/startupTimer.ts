class StartupTimer {
  private _startTime: number;
  private _endTime: number;
  private _duration: number | null;

  constructor() {
    this._startTime = 0;
    this._endTime = 0;
    this._duration = null;
  }

  public startTimer() {
    this._startTime = performance.now();
  }

  public endTimer() {
    this._endTime = performance.now();
    const diff = (this._endTime - this._startTime);
    this._duration = Math.round(diff * 100) / 100;
  }

  public get durationInMillisecs(): number | null {
    return this._duration;
  }
}

export { StartupTimer };