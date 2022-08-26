import Twitter_icon from '../images/twitter.svg'
import Github_icon from '../images/github-icon.svg'
import Atcoder_icon from '../images/atcoder.png'

function Contact() {
  return (
    <div className='flex space-x-12 flex-row justify-center items-center p-40'>
      <a href='https://twitter.com/42hnakatan'>
        <img src={Twitter_icon} alt='Twitter' />
      </a>
      <a href='https://github.com/kuma0328'>
        <img src={Github_icon} alt='Github' />
      </a>
      <a href='https://atcoder.jp/users/kuma033'>
        <img src={Atcoder_icon} alt='Atcoder'/>
      </a>
    </div>
  )
}

export default Contact
