'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function NextPage() {
  const [count, setCount] = useState(0)

  const decrementCount = () => setCount(count - 1)
  const incrementCount = () => setCount(count + 1)

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-tailwindcss)</title>
      </Head>
      <div className="flex flex-col text-center text-2xl w-full">
        <p>from app router</p>
        <div>
          <Image
            className="ml-auto mr-auto"
            src="/images/logo.png"
            alt="Logo image"
            width={256}
            height={256}
          />
        </div>
        <h2 className="flex justify-center space-x-12">
          <button
            className="bg-blue-500 text-white font-bold px-4 rounded"
            onClick={decrementCount}>-</button>

          <span>{count}</span>

          <button
            className="bg-blue-500 text-white font-bold px-4 rounded"
            onClick={incrementCount}>+</button>
        </h2>

      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/home">Go to home page</Link>
      </div>
    </React.Fragment>
  )
}
