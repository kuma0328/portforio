import {useState} from 'react'
import {SkillData} from './data/Skill/SkillData'

function Skills() {
  const [Text, setText] = useState('画像をクリックしてね')

  function handleChangeText(text) {
    setText(prevState => text)
  }

  return (
    <div>
      <div className='flex space-x-12 flex-row justify-center items-center'>
        {SkillData.map((item, index) => {
          return (
            <img src={item.image} alt={item.title} onClick={ () => handleChangeText(item.text)} className='w-1/4'/>
          )
        } ) }
      </div>
      <div className='flex jusityfy-center items-center text-4xl font-light h-64'>
        {Text}
        </div>
    </div>
  )
}

export default Skills
