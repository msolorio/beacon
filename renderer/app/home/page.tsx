'use client'

import React, { useEffect } from 'react';
import { state$ } from '@/renderer/state';
import HomePageUi from './pageUi';

export default function HomePage() {
  useEffect(() => {
    window.fs.readFileTree().then((data: string) => {
      state$.fileTree.set(data);
    });
  }, []);

  return (
    <HomePageUi />
  )
}
