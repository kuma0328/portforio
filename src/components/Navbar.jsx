import {MenuItems} from './MenuItems'

function Navbar() {
  return (
    <>
      <nav >
        <h1 className='bg-black h-20 text-white p-6 text-xl'>
          {window.location.pathname}
          </h1>
        <ul className='Menu list'>
          {MenuItems.map((item, index) => {
            return (
              <button 
              className='inline-block content-between w-1/5 text-gray-400 hover:text-black'
              key={index}
              onClick={() => {
                window.location.pathname = item.link;
              }}>
                <div className='text-xl inline'>
                  {item.title}
                </div>
              </button>
            )
          } ) }
        </ul>
      </nav>
    </>
  )
}

export default Navbar
