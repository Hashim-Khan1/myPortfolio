import WorkAndExperianceCard from './WorkExperianceCard'
import { useState,useEffect,useRef } from 'react'

function WorkAndExperiance() {
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
        <WorkAndExperianceCard date='22/03/2021 - 20/22/1987' number='1' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nulla maxime fugit at voluptas impedit itaque provident mollitia! Eos aliquid provident facere sit dolorem, ratione eum. Fuga maxime sunt sint!' />
        <WorkAndExperianceCard date='22/03/2021 - 20/22/1987' number='2' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nulla maxime fugit at voluptas impedit itaque provident mollitia! Eos aliquid provident facere sit dolorem, ratione eum. Fuga maxime sunt sint!' />
        <WorkAndExperianceCard date='22/03/2021 - 20/22/1987' number='3' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, nulla maxime fugit at voluptas impedit itaque provident mollitia! Eos aliquid provident facere sit dolorem, ratione eum. Fuga maxime sunt sint!' />

      </div>
  
  )
  }
  export default WorkAndExperiance