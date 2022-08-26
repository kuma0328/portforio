import c_plus_img from '../images/c-plusplus.svg'
import c_img from '../images/c.svg'
import python_img from '../images/python.svg'
import react_img from '../images/react.svg'
import {useState} from "react"

function Skills() {
  const C_plus_text = 'C++ : 競技プログラミングで使っています。atcoderでは現在緑色です。'
  const C_text = 'C : 42Tokyoで使っています。libc,printfの再実装などCSの基礎から学んでいます。'
  const python_text = 'python : 42Tokyoのイベントで使用しました。discordbotやスクレイピングについて実装しました'
  const react_text = 'react : 現在勉強中です'

  const [Text, setText] = useState('画像をクリックしてね')
  function Click_C_plus() {
    setText(prevState => C_plus_text)
  }
  function Click_C() {
    setText(prevState => C_text)
  }
  function Click_python() {
    setText(prevState => python_text)
  }
  function Click_react() {
    setText(prevState => react_text)
  }
  return (
    <div>
      <div className='flex space-x-12 flex-row justify-center items-center'>
        <img src={c_plus_img} alt="c_plus" onClick={Click_C_plus} className='w-1/4'/>
        <img src={c_img} alt="c" onClick={Click_C} className='w-1/4'/>
        <img src={python_img} alt="python" onClick={Click_python} className='w-1/4'/>
        <img src={react_img} alt="react" onClick={Click_react} className='w-1/4'/>
      </div>
      <div className='flex jusityfy-center items-center text-4xl font-light h-64'>
        {Text}
        </div>
    </div>
  )
}

export default Skills
