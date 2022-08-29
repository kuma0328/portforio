import Icon from '../images/icon.png'
import {SelfData} from '../data/Self/SelfData'

function Self() {
  return (
    <div className=' flex flex-row'>
        <img className='object-contain h-96 w-1/2'
        src={Icon} alt="icon" />
        <ul className='flex flex-col space-y-12 text-lg'>
          {SelfData.map((item, index) => {
            return (
              <li key={index}>{item.title} : {item.text}</li>
            )
          } ) }
        </ul>
    </div>
  )
}

export default Self
