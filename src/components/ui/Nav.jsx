import { useState } from 'react'
function Nav() {
  const [count, setCount] = useState(0)
  const scrollToFunction = (target) =>{
    console.log('yes')
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }
  return (
      <div className='Nav'>
        <ul>
          <li onClick={()=>scrollToFunction('#aboutMe')}>About</li>
          <li onClick={()=>scrollToFunction('#projectSection')}>Projects</li>
          <li onClick={()=>scrollToFunction('#footer')}>Github</li>
          <li onClick={()=>scrollToFunction('#footer')}>Contact</li>
        </ul>
      </div>
  )
}
export default Nav

