'use client'

import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import BlockEditorDocument from '@/tiptap/editor/app/[room]/page';

export default function HomePage() {
  const [startupTime, setStartupTime] = useState(null);

  const getTime = () => {
    const time = window.electron.getStartupTime();
    setStartupTime(time);
  }

  return (
    <div>
      <Head>
        <title>Home - Nextron (with-tailwindcss)</title>
      </Head>

      <div className="">
        <BlockEditorDocument params={{ room: 'test' }} />
      </div>

      <div className="inline-flex items-center space-x-2">
        <button onClick={getTime} className="px-1 py-.5 bg-gray-400 text-white rounded hover:bg-gray-500">
          Get Startup Time
        </button>
        {startupTime && <p>{startupTime} ms</p>}
      </div>
    </div>
  )
}
