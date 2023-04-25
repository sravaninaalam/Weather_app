import React,{useState} from 'react'
import './App.css'
const Weather = () => {
    const[city,setCity]=useState('')
    const[temp,setTemp]=useState('')
    const[val,setVal]=useState(0)
    const weatherData=(e)=>{
       e.preventDefault()
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8efaf16f28cdb3baf862312d7e67c9b9 `).then(res=>res.json())
       
       .then(data=>{

        const kel=data.main.temp;
        const cel=kel-273.15;
        setTemp("Temparature at "+ city +" "+" is"+" "+ Math.round(cel)+" °C")
         setVal(Math.round(cel))
      })
      setCity('')

    }
    console.log(val)
  return (
    <>
      <div className='col-md-12 mt-5'>
         <h1>Weather Form</h1>
         <form onSubmit={weatherData}>
         <br></br>
            <input type="text"  value={city} onChange={(e)=>setCity(e.target.value)}/>
            &nbsp; &nbsp;&nbsp;<button type="submit" className='btn btn-success '>Search</button>
         </form>
        
         <div className='col-md-12 mt-5'>
            <div className='shadow rounded' style={{width:"500px",height:"300px",margin:"auto",background:"lightsteelblue"}}>
            
             {!val ?<div>
              
             </div>:
             <div>
             { val <= 25 ? <div>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8jwZIJOpJ36B-cNs4WMeth_sshQzmYzJSlsplIhVEBg&usqp=CAU&ec=48665698"className="rounded"/>
                   <br></br><br></br><h3>{temp}</h3>
                    <h4 style={{color:"indigo",fontStyle:"italic"}}>Expecting rain 🌧⛈</h4>
                </div>
                :
                <div>
                    <img src="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=" className='rounded'/>
                     <br></br> <br></br><h3>{temp}</h3> 
                       <h4 style={{color:"indigo",fontStyle:"italic"}}>Sunny Day 🌞🌞</h4>
                      </div>
            }
            </div>
          }
            </div>
         </div>
      </div>
      
    </>








   
  )
}

export default Weather
