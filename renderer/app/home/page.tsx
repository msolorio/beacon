'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import TipTap from './components/TipTap'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Home - Nextron (with-tailwindcss)</title>
      </Head>

      {/* <div className="flex flex-col text-center text-2xl w-full"> */}
      <div className="">
        <TipTap />
      </div>

      <div className="mt-1 w-full flex-wrap flex justify-center">
        {/* <Link href="/next">Go to next page</Link> */}
      </div>
    </div>
  )
}
