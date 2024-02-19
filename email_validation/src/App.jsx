import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
const [data,setData] = useState('')
const [email_error,setError] = useState('No Error')


// Handle Post Function

const handleValidate = async(e)=>{
  setError('Please Wait')
  console.log('hello')
  e.preventDefault()
  const url = 'http://127.0.0.1:8000/validate-email/'
  let data_share
  if (data.length ==0){
   data_share =''
  }
  else{
    data_share = {"email":data}
  }
  
  try {
    const {data:res} = await axios.post(url,data_share)
    
    setError(res.message)
  } catch (error) {
    setError(error.response.data.error)
    console.log(error)
  }
}

// Handle Email Data
const handleData=(e)=>{
  
  setData(e.target.value)
  
}

  return (
    <>
      <form action="">
        <input type="email" placeholder='Email' name='email' value={data} onChange={(e)=>handleData(e)} style={{width:200,height:50,margin:20,padding:'0px 10px'}}/>
        <br />
        <button type='submit' onClick={(e)=>handleValidate(e)}>Check Email</button>
       <p>{email_error}</p> 

      </form>
    </>
  )
}

export default App
