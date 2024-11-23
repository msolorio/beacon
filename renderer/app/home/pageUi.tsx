import React, { Suspense } from 'react'
import Head from 'next/head'
import BlockEditorDocument from '@/tiptap/editor/app/[room]/page';
// import { GetLoadTime } from './GetLoadTime';

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Head>
          <title>Home - Nextron (with-tailwindcss)</title>
        </Head>

        <div className="">
          <BlockEditorDocument params={{ room: 'test' }} />
        </div>

        {/* <GetLoadTime /> */}
      </div>
    </Suspense>
  )
}