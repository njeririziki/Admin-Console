import { Space, Card,Progress,Badge,Typography} from 'antd'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Summary = ({percent,color,number,title})=> (
  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around' }}>

<Typography.Title level={5}  style={{display:'flex', flexDirection:'row',}}>
<Badge color={color}/> 
  {title} </Typography.Title>
<Typography.Text>{number}</Typography.Text>
  <div style={{width:'350px'}}>
   <Progress  percent={percent} strokeColor={color} />
    </div>
</div>
)

const Retainership = ({totals}) => {
    return ( 
        <div 
        style={{backgroundColor:'white' ,display:'flex', flexDirection:"column",
        padding:'1em 1em 1em 1em'}} >
          <Typography.Title level={4}
          style={{padding:'1em 0em 0em 2em'}}> Retention Rate</Typography.Title> 
         <div style={ {width:'250px', 
           height:'250px', alignSelf:'center', marginBottom:'0px'}}>
             
              <CircularProgressbar
       circleRatio= {0.6}
       value = { 70}
       text={'70 %'}
       strokeWidth={5}
       styles ={ buildStyles({
           
           rotation: 1/2 + 1/5,
           textSize:'18px',
           strokeLinecap:'butt',
           pathTransitionDuration: 0.5,
           pathColor: '#ffab91',
           trailColor: '#efebe9',
           textColor: '#c63f17',
       })
       }/>  
           </div> 
         
     {/* <Progress 
    
     percent={60} success={{ percent: 30 }} type="dashboard"
     strokeColor={{
        0: '#108ee9',
      100: '#87d068',
    }}/> */}
    <div >
    { totals.map(total=>(
    <Summary percent={total.percent} number={total.number} color={total.color}
           title={total.title}/>
  )
  )}
    </div>

 
        </div>
     );
}
 
export default Retainership;