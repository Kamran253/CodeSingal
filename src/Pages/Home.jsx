import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../Componenet/HeroSection/HeroSection'
import Slider from '../Componenet/Slider/Slider'
import CosmoComponent from '../Componenet/CosmoComponent/CosmoComponent'
import IntegrationSection from '../Componenet/IntegrationSection/IntegrationSection'
import Costomer from '../Componenet/Costomer/Costomer'
import Result from '../Componenet/Result'
import Resources from '../Componenet/Resources/Resources'
import Card from '../Componenet/Card/Card'
import Products from './Products'
import Fotter from '../Componenet/Fotter/Fotter'
import SkillSection from '../Componenet/SkillSection/SkillSection'
import CarouselSlider from '../Componenet/Crousal/Crousal';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
export default function Home() {
  return (
    <div>
   <Navbar />
     <HeroSection />
      <Slider/>
      <SkillSection />
      <CosmoComponent/>
      <IntegrationSection/> 
      <Costomer/>
     <CarouselSlider/> 
     <Result/>
     <Resources/>
     <Card/>
     
      <Fotter/>  

    </div>
  )
}
