import { useState,useEffect,useRef } from 'react'

function Interests() {
  const componentRef = useRef(null);
  const sleep = async (time)=>{
    return new Promise(resolve => setTimeout(resolve, time));
  }
  const fadeIn = async()=>{
    let childElementsFade = componentRef.current.children
    for(let i=0;i<childElementsFade.length;i++){
    await sleep(650)
      childElementsFade[i].classList.remove('notVisible')
      childElementsFade[i].classList.add('isVisible')
    }

  }
  useEffect(()=>{
    fadeIn()
  },[])
  return (
    
    <div ref={componentRef}>
      <p className='sectionDescription notVisible'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
      <p className='sectionDescription notVisible'>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.!</p>
      <p className='sectionDescription notVisible'>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.!</p>
    </div> 

)
}
export default Interests