'use client'

import React, { useState } from 'react'
import Head from 'next/head'
import BlockEditorDocument from '../../components/tiptap/editor/app/[room]/page';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Home - Nextron (with-tailwindcss)</title>
      </Head>

      <div className="">
        <BlockEditorDocument params={{ room: 'test' }} />
      </div>
    </div>
  )
}
