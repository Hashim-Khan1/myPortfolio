import { useState } from 'react'
function Nav() {
  const [count, setCount] = useState(0)

  return (
      <div className='Nav'>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Github</li>
          <li>Contact</li>
        </ul>
      </div>
  )
}
export default Nav

