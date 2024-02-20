import React from 'react'

export const Reducer = (state,action) => {
  switch (action.type) {
    case "handledata":
        const {name,value} = action.payload

        return {
            ...state, [name]:value
        }
        
  
    default:
        break;
  }
}
