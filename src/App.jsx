import { useState,useEffect,useRef } from 'react'
import './App.css'
import Nav from './components/ui/Nav'
import AboutMe from './components/ui/about/AboutMe'
import Interests from './components/ui/about/Interests'
import WorkExperiance from './components/ui/about/WorkExperiance'
import Reference from './components/ui/about/Reference'
import ProjectCard from './components/ui/ProjectCard'

function App() {
  const [aboutLinkValue, setAboutLink] = useState('About Me')
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);
  const aboutMe = useRef(aboutLinkValue);

  const changeAboutMe = async(e)=>{

    const aboutLinks = document.getElementsByClassName('aboutMeLink')
    for(let i=0; i<aboutLinks.length;i++ ){
      aboutLinks[i].classList.remove('currentSelected')
    }
    e.currentTarget.classList.add('currentSelected')
    let aboutMeText = document.getElementById('aboutMeText')
    aboutMeText.classList.add('backSpaceWriting')
    let targetElemens = e.currentTarget.innerText
    setTimeout(() => {

    aboutMeText.classList.remove('backSpaceWriting')
    aboutMeText.classList.add('typeWriter')
      setAboutLink(targetElemens)


    setTimeout(() => {
    aboutMeText.classList.remove('typeWriter')
      
    }, 2000);
      
    }, 2000);

  }


  useEffect(()=>{
    function handleScroll() {
      const top = componentRef.current.getBoundingClientRect().top;
      const isVisible = top < window.innerHeight - 150;
      setIsVisible(isVisible);
      
    }
    window.addEventListener('scroll', handleScroll,{passive:true});

    return () => {
      window.removeEventListener('scroll', handleScroll,{passive:true});
    };


  },[isVisible,aboutLinkValue])
  return (
    <div className="App">
      <Nav />
      <div id='introSection' className='section'>
        <p className='descriptionTitle'>Hi, my name is</p>
        <h1>Hashim Khan</h1>
        <h1>Full stack / Software Developer</h1>
        <p className='descriptionTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, voluptas. Fugiat id exercitationem neque animi reiciendis sunt sed, aperiam facilis ab laborum labore rerum quisquam aliquid earum, voluptatem nobis suscipit! Nulla quibusdam adipisci qui repellendus!</p>
        <p className='descriptionTitle link'>View projects</p>
        <div className='scollBtn'>
          <div className='scollCricle'></div>
        </div>

      </div>
      <div className={`section ${isVisible!=false?'isVisible':'notVisible'}`} id='aboutMe'ref={componentRef} >
        <div className='row' id='contentRow'>
          <div className='column'>
            <div id='holder'>
              <p className='sectionTitle' id='aboutMeText' ref={aboutMe}>{aboutLinkValue}</p>
            </div>
            {aboutLinkValue == 'About Me' ? <AboutMe/>: aboutLinkValue == 'Intrest And Hobbies' ?<Interests/>:aboutLinkValue == 'Work Experiance' ? <WorkExperiance/>:<Reference/>}
         
          </div>
     
          <div className='sideBar'>
            <ul className='aboutMeListOptions'>
              <li className='aboutMeLink currentSelected'  onClick={changeAboutMe}>About me</li>
              <li className='aboutMeLink'  onClick={changeAboutMe}>Intrest and hobbies</li>
              <li className='aboutMeLink'  onClick={changeAboutMe}>Work experiance</li>
              <li className='aboutMeLink'  onClick={changeAboutMe}>References</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='section'>
        <p className='sectionTitle '>Projects</p>
        <div className='projectRowContainer'>
          <div className='row projectRow projectRowRight'>
            <ProjectCard img='testImg' technologyUsed='Javascript (ES6), React, NodeJS, Express, MYSQL, CASSANDRADB'/>
            <ProjectCard img='testImg2' technologyUsed='Javascript (ES6), React, NodeJS, Express'/>
            <ProjectCard img='testImg3' technologyUsed='Javascript (ES6), React, NodeJS, Express'/>
            <ProjectCard img='testImg' technologyUsed='Javascript (ES6), React, NodeJS, Express'/>
            <ProjectCard img='testImg2' technologyUsed='Javascript (ES6), React, NodeJS, Express, MYSQL, CASSANDRADB'/>
            <ProjectCard img='testImg3' technologyUsed='Javascript (ES6), React, NodeJS, Express'/>
            <ProjectCard img='testImg' technologyUsed='Javascript (ES6), React, NodeJS, Express, MYSQL, CASSANDRADB'/>
          </div>
          <div className='row projectRow projectRowLeft'>
            <ProjectCard img='testImg' technologyUsed='Javascript (ES6), React, NodeJS, Express, MYSQL, CASSANDRADB'/>
            <ProjectCard img='testImg2' technologyUsed='Javascript (ES6), React, NodeJS, Express'/>
            <ProjectCard img='testImg3' technologyUsed='Javascript (ES6), React, NodeJS, Express'/>
            <ProjectCard img='testImg' technologyUsed='Javascript (ES6), React, NodeJS, Express'/>
            <ProjectCard img='testImg2' technologyUsed='Javascript (ES6), React, NodeJS, Express, MYSQL, CASSANDRADB'/>
            <ProjectCard img='testImg3' technologyUsed='Javascript (ES6), React, NodeJS, Express'/>
            <ProjectCard img='testImg' technologyUsed='Javascript (ES6), React, NodeJS, Express, MYSQL, CASSANDRADB'/>

          </div>
        </div>



        
      </div>
      <div className='column footer'>
        <div className='row' style={{justifyContent:'center',margin:'5px 0'}}>
        <a href="">
          <div className='contactImg' id='gitHubWhite'></div>
        </a>
        <a href="">
          <div className='contactImg' id='linkedIN'></div>
        </a>
        </div>
        <p>© Hashim Khan</p>
      </div>

    </div>
  )
}

export default App
