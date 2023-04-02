function projectCard (props){
    let TechString = props.technologyUsed.split(",")

    let img = props.img
    let Background= `src/assets/img/${img}.png`
    return(
      <div className='projectCard' style={{backgroundImage: `url(${Background})`}}>
        <p style={{textAlign:'center', fontSize:'26px'}}>Amazon clone</p>
        <div className="row alignItems" style={{justifyContent:'center'}}>
            <a href="https://www.youtube.com/watch?v=ok_kUEjPIkw">
              <div className="gitImg"></div>
            </a>
            <p style={{textDecoration:'underLine'}}>View site</p>
        </div>
        <div className="row projectList">
         {TechString.map((e)=>{
                return(
                  <div style={{marginRight: "10px", listStyle:'none'}}>
                  <li className='ra listSmall'>{e}</li>
                </div>
                )
              })} 
        </div>
      </div>

    )

}

export default projectCard