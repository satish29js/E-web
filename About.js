import React,{useContext} from 'react'
import HeroSecton from './components/HeroSecton';
import {AppContext} from "./Context/Productcontext"

function About() {
const {myName} = useContext(AppContext)

  const data = {
    name : "Satish Ecommerce Web "
  }
  return (
    <>
    {myName}
     <HeroSecton mydata={data} />
    </>
   
  )
}

export default About;
