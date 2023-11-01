import React from 'react'
import MyAccordion from './MyAccordion'
import { Data } from './Data'
const Accordion = ()=>{
console.log(Data)
return(
  <div>
    {
      Data.map((e)=>{
        console.log(e)
        return(
          <>
          <MyAccordion topic = {e.Topic} des = {e.Des } html= {e.html}/>
          </>
        )
      })
    }
  </div>
)
}

export default Accordion
