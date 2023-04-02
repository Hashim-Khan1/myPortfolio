function WorkAndExperianceCard(props) {

    return (
    <div className='row alignItems notVisible'>
        <div className='column alignItems' style={{margin:'20px 15px 20px 0'}}>
        <div className='circle'>{props.number}</div>
        <div className='workExpLine'></div>
        </div>
        <div className='column'>
        <p className='sectionDescription'>{props.description}</p>
        <p className='dateText'>{props.date}</p>
        </div>
    </div>
  
  )
  }
  export default WorkAndExperianceCard