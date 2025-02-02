import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopBar } from './componets/top-bar/top-bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex justify-center p-5 items-center">
      <TopBar />
      <div className="space-y-5 text-center gap-5">
        <h1 className="lg:text-4xl text-2xl  font-bold">
          Animated Hamburger Menu
        </h1>
        <p className="max-w-lg text-sm leading-6">
          This is a simple example of how to build an animate a hamburger menu
          with React and Framer Motion. I hope you like it!
        </p>
        <button className="px-5 py-3 bg-neutral-300 rounded-md text-sm text-stone-800">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App
