import React, { useState } from 'react';

export default function GetLoadTime() {
  const [startupTime, setStartupTime] = useState(null);

  const getTime = () => {
    const time = window.electron.getStartupTime();
    setStartupTime(time);
  }

  return (
    <div className="inline-flex items-center space-x-2">
      <button onClick={getTime} className="px-1 py-.5 bg-gray-400 text-white rounded hover:bg-gray-500">
        Get Startup Time
      </button>
      {startupTime && <p>{startupTime} ms</p>}
    </div>
  )
}