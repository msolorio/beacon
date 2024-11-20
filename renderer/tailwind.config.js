// const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './renderer/app/**/*.{js,ts,jsx,tsx}',
    './renderer/app/home/components/**/*.{js,ts,jsx,tsx}',
    './renderer/components/tiptap/**/*.{js,ts,jsx,tsx}',
    './renderer/components/tiptap/**/*.{css}',
  ],
  safelist: ['ProseMirror'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
