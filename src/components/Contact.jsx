import {ContactData} from './data/Contact/ContactData' 

function Contact() {
  return (
    <div className='flex space-x-12 flex-row justify-center items-center p-20'>
      {ContactData.map((item, index) => {
        return (
          <a href={item.url} className='w-1/3'>
            <img src={item.image} alt={item.text} />
          </a>          
        )
      })}
    </div>
  )
}

export default Contact
