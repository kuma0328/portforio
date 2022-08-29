import React from 'react'
import {LearningData} from '../data/Learning/LearningData'

function Learning() {
  return (
    <div className='flex flex-row justify-center items-center space-x-20'>
        <ul className='text-xl space-y-12'>
          {LearningData.map((item, index) => {
            return (
              <li>{item.day}{'　：　'}{item.text}</li>
            )
          })}
        </ul>
    </div>
  )
}

export default Learning
