// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Sidebar } from './components/Sidebar'

const App = () => {
  return (
    <div className='h-screen bg-slate-900'>
      <div className='h-[90%] flex'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App