import { useReducer } from 'react'
import './App.css'
import { useEmailContext } from './Context/Context'

function App() {
 const {handleData,state,handlePostEmail,errors} = useEmailContext()

  return (
    <>
    <h1>Welcome to Email Validator</h1>
  <h2>This Web-App provides validation for your emails. <br /> It checks whether the email you entered exists on the internet or not.</h2>
  <h3>Just type your email in the input field and press Enter to validate.</h3>
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
