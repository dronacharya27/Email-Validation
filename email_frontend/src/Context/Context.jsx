import { createContext, useContext, useReducer, useState } from "react";
import { Reducer } from "../Reducer/Reducer";
import axios from 'axios'
const EmailContext = createContext()

const email_state = {
    "email":''
}
const EmailContextProvider = ({children})=>{
const [state,dispatch] = useReducer(Reducer,email_state)
const [errors,setErrors] = useState('')

const handleData=(e)=>{
   const {name, value} = e.target

   dispatch({
    type:"handledata",
    payload:{name,value}
   })
}


const handlePostEmail = async (e)=>{
    e.preventDefault()
    const url='http://127.0.0.1:8000/validate-email/'
    setErrors("Please Wait...")
    try {
        const {data:res} = await axios.post(url,state)
        console.log(res)
        setErrors(res.message)
    } catch (error) {
        console.log(error)
        setErrors(error.response.data.error)
        
    }
}

    return (
        <EmailContext.Provider value={{handleData,state,handlePostEmail,errors,setErrors}}>
            {children}
        </EmailContext.Provider>
    )
}

const useEmailContext =()=>{
    return useContext(EmailContext)
}

export {EmailContext,EmailContextProvider,useEmailContext}