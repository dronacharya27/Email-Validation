import { useReducer } from 'react'
import './App.css'
import { useEmailContext } from './Context/Context'

function App() {
 const {handleData,state,handlePostEmail,errors} = useEmailContext()

  return (
    <>

    <form action="">
        <input type="email" placeholder='Email' name='email' value={state.email} onChange={(e)=>handleData(e)} style={{width:200,height:50,margin:20,padding:'0px 10px'}}/>
        <br />
        <button type='submit' onClick={(e)=>handlePostEmail(e)}>Validate</button>
       <p>{errors}</p> 

      </form>
    </>
  )
}

export default App
