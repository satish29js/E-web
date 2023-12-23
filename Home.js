import React from 'react'
import HeroSecton from './components/HeroSecton';
import Services from './components/Services';
import Trusted from './components/Trusted';


function Home() {
  const data = {
    name: "Satish's Store"
  }
  return (
    <>
     <HeroSecton mydata={data}/>
     <Services/>
     <Trusted/>
     
    </>
   
  )
}




export default Home;
