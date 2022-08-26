import { Link } from 'react-router-dom';
import {MenuItems} from './MenuItems'

function Navbar() {
  return (
    <>
      <nav >
        <h1 className='bg-black h-20 text-white p-6 text-xl'>
          Portforio
          </h1>
        <ul className='Menu list'>
          {MenuItems.map((item, index) => {
            return (
              <li 
              className='inline-block content-between w-1/5 text-gray-400 hover:text-black'
              key={index}>
                <div className='text-xl inline'>
                  <Link to={item.link}>{item.title}</Link>
                </div>
              </li>
            )
          } ) }
        </ul>
      </nav>
    </>
  )
}

export default Navbar
