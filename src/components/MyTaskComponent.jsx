import React from 'react'
import TaskComponent from './TaskComponent'

const MyTaskComponent = () => {
  return (
    <div className='mt-10'>
      <p className='text-2xl capitalize'>My tasks</p>
      <div className='flex flex-col gap-4'>
        <TaskComponent />
        <TaskComponent />
      </div>
    </div>
  )
}

export default MyTaskComponent
