import Icon from '../images/icon.png'

function Self() {
  return (
    <div className=' flex flex-row'>
        <img className='object-contain h-96 w-1/2'
        src={Icon} alt="icon" />
        <ul className='flex flex-col space-y-12 text-lg'>
          <li> 名前 : 中谷　駿斗（なかたに　はやと）</li>
          <li> 学校 : 同志社大学法学部法律学科</li>
          <li> 趣味 : 競プロ、音楽、漫画、ゲーム</li>
          <li> サークル : Doer（プログラミングサークル）</li>
          <li> ゼミ : 民事訴訟法</li>
          <li> ひとこと : web系についてもっと詳しくなりたいです！</li>
        </ul>
    </div>
  )
}

export default Self
