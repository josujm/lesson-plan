import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Main Page

import MainPage from './Component/MainPage'
import Topic1 from './Component/Topics/Topic1';
import Topic2 from './Component/Topics/Topic2';
import Topic3 from './Component/Topics/Topic3';
import Topic4 from './Component/Topics/Topic4';
import Topic5 from './Component/Topics/Topic5';
import Topic6 from './Component/Topics/Topic6';
import Topic7 from './Component/Topics/Topic7';
import Topic8 from './Component/Topics/Topic8';
import Topic9 from './Component/Topics/Topic9';
import Topic10 from './Component/Topics/Topic10';

// Topic 1

import Inception1 from './Component/Topics/Topic1/Inception1';
import ExploringPriorKnowledge1 from './Component/Topics/Topic1/ExploringPriorKnowledege1';
import AllowingVenture1 from './Component/Topics/Topic1/AllowingVenture1';
import EnlighteningProjection1 from './Component/Topics/Topic1/EnlighteningProjection1';
import ExploringAndResponding1 from './Component/Topics/Topic1/ExploringandResponding1';
import AncillaryClues1 from './Component/Topics/Topic1/AncillaryClues1';
import Closure1 from './Component/Topics/Topic1/Closure1';
import AppraisingVenture1 from './Component/Topics/Topic1/AppraisingVenture1';
 //Topic 2




import Inception2 from './Component/Topics/Topic2/Inception2';
import ExploringPriorKnowledge2 from './Component/Topics/Topic2/EnlighteningProjection2';
import AllowingVenture2 from './Component/Topics/Topic2/AllowingVenture2';
import AncillaryClues2 from './Component/Topics/Topic2/AncillaryClues2';
import Closure2 from './Component/Topics/Topic2/closure2'
import ExploringandResponding2 from './Component/Topics/Topic2/ExploringandResponding2'
import AppraisingVenture2 from './Component/Topics/Topic2/AppraisingVenture2'
import EnlighteningProjection2 from './Component/Topics/Topic2/EnlighteningProjection2'


//Topic 3
import Inception3 from './Component/Topics/Topic3/Inception3';
import ExploringPriorKnowledge3 from './Component/Topics/Topic3/ExploringPriorKnowledge3';
import AllowingVenture3 from './Component/Topics/Topic3/AllowingVenture3';
import AncillaryClues3 from './Component/Topics/Topic3/AllowingVenture3'
import Closure3 from './Component/Topics/Topic3/closure3'
import AppraisingVenture3 from './Component/Topics/Topic3/AppraisingVenture3'
import EnlighteningProjection3 from './Component/Topics/Topic3/EnlighteningProjection3'
import ExploringandResponding3 from './Component/Topics/Topic3/ExploringandResponding3'


//Topic 4
import Inception4 from './Component/Topics/Topic4/Inception4'
import Closure4 from './Component/Topics/Topic4/Closure4'
import AllowingVenture4 from './Component/Topics/Topic4/AllowingVenture4'
import ExploringandResponding4 from './Component/Topics/Topic4/ExploringandResponding4'
import AncillaryClues4 from './Component/Topics/Topic4/AncillaryClues4'
import EnlighteningProjection4 from './Component/Topics/Topic4/EnlighteningProjection4'
import AppraisingVenture4 from './Component/Topics/Topic4/AppraisingVenture4'
import ExploringPriorKnowledge4 from './Component/Topics/Topic4/EnlighteningProjection4'





//Topic5

import Inception5 from './Component/Topics/Topic5/Inception5';
import Closure5 from './Component/Topics/Topic5/Closure5';
import AllowingVenture5 from './Component/Topics/Topic5/AllowingVenture5';
import AppraisingVenture5 from './Component/Topics/Topic5/AppraisingVenture5'
import ExploringPriorKnowledge5 from './Component/Topics/Topic5/ExploringPriorKnowledge5'
import EnlighteningProjection5 from './Component/Topics/Topic5/EnlighteningProjection5'
import ExploringandResponding5 from './Component/Topics/Topic5/ExploringandResponding5'
import AncillaryClues5 from './Component/Topics/Topic5/AncillaryClues5'











//Topic6

import Inception6 from './Component/Topics/Topic6/Inception6';
import ExploringPriorKnowledge6 from './Component/Topics/Topic6/ExploringPriorKnowledge6'
import AllowingVenture6 from './Component/Topics/Topic6/AllowingVenture6'
import EnlighteningProjection6 from './Component/Topics/Topic6/EnlighteningProjection6'
import AppraisingVenture6 from './Component/Topics/Topic6/AppraisingVenture6'
import AncillaryClues6 from './Component/Topics/Topic6/AncillaryClues6'
import Closure6 from './Component/Topics/Topic6/Closure6'
import ExploringandResponding6 from './Component/Topics/Topic6/ExploringandResponding6'


//Topic7
import Inception7 from './Component/Topics/Topic7/Inception7'
import ExploringPriorKnowledge7 from './Component/Topics/Topic7/ExploringPriorKnowledge7'
import Closure7 from './Component/Topics/Topic7/Closure7'
import AllowingVenture7 from './Component/Topics/Topic7/AllowingVenture7'
import EnlighteningProjection7 from './Component/Topics/Topic7/EnlighteningProjection7'
import AppraisingVenture7 from './Component/Topics/Topic7/AllowingVenture7'
import AncillaryClues7 from './Component/Topics/Topic7/AncillaryClues7'
import ExploringAndResponding7 from './Component/Topics/Topic7/ExploringAndResponding7'


//Topic8

import Inception8 from './Component/Topics/Topic8/Inception8'
import ExploringPriorKnowledge8 from './Component/Topics/Topic8/ExploringPriorKnowledge8'
import Closure8 from './Component/Topics/Topic8/Closure8'
import AllowingVenture8 from './Component/Topics/Topic8/AllowingVenture8'
import EnlighteningProjection8 from './Component/Topics/Topic8/EnlighteningProjection8'
import AppraisingVenture8 from './Component/Topics/Topic8/AppraisingVenture8'
import AncillaryClues8 from './Component/Topics/Topic8/AncillaryClues8'
import ExploringAndResponding8 from './Component/Topics/Topic8/ExploringAndResponding8'

//Topic9


import Inception9 from './Component/Topics/Topic9/Inception9'
import ExploringPriorKnowledge9 from './Component/Topics/Topic9/ExploringPriorKnowledge9'
import Closure9 from './Component/Topics/Topic9/Closure9'
import AllowingVenture9 from './Component/Topics/Topic9/AllowingVenture9'
import EnlighteningProjection9 from './Component/Topics/Topic9/EnlighteningProjection9'
import AppraisingVenture9 from './Component/Topics/Topic9/AppraisingVenture9'
import AncillaryClues9 from './Component/Topics/Topic9/AllowingVenture9'
import ExploringAndResponding9 from './Component/Topics/Topic9/ExploringAndResponding9'


//Topic10

import Inception10 from './Component/Topics/Topic10/Inception10'
import ExploringPriorKnowledge10 from './Component/Topics/Topic10/ExploringPriorKnowledge10'
import Closure10 from './Component/Topics/Topic10/Closure10'
import AllowingVenture10 from './Component/Topics/Topic10/AllowingVenture10'
import EnlighteningProjection10 from './Component/Topics/Topic10/EnlighteningProjection10'
import AppraisingVenture10 from './Component/Topics/Topic10/AppraisingVenture10'
import AncillaryClues10 from './Component/Topics/Topic10/AncillaryClues10'
import ExploringAndResponding10 from './Component/Topics/Topic10/ExploringAndResponding10'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<MainPage />} />


          <Route path='/topic1' element={<Topic1 />} />
          <Route path='/topic2' element={<Topic2 />} />
          <Route path='/topic3' element={<Topic3 />} />
          <Route path='/topic4' element={<Topic4 />} />
          <Route path='/topic5' element={<Topic5 />} />
          <Route path='/topic6' element={<Topic6 />} />
          <Route path='/topic7' element={<Topic7 />} />
          <Route path='/topic8' element={<Topic8 />} />
          <Route path='/topic9' element={<Topic9 />} />
          <Route path='/topic10' element={<Topic10 />} />

          <Route path='/topic1/inception' element={<Inception1 />} />
          
          <Route path='/topic1/exploring-prior-knowledge' element={<ExploringPriorKnowledge1 />} />
          <Route path='topic1/allowing-venture' element={<AllowingVenture1 />} />
          <Route path='topic1/enlightening-projection' element={<EnlighteningProjection1 />} />
          <Route path='topic1/exploring-and-Responding' element={<ExploringAndResponding1 />} />
          <Route path='topic1/ancillary-clues' element={<AncillaryClues1/>} />
          <Route path='topic1/closure' element={<Closure1 />} />
          <Route path='topic1/appraising-venture' element={<AppraisingVenture1 />} />
          
          




          <Route path='/topic2/inception' element={<Inception2 />} />
          <Route path='/topic2/exploring-prior-knowledge' element={<ExploringPriorKnowledge2 />} />
          <Route path='/topic2/allowing-venture' element={<AllowingVenture2 />} />
          <Route path='/topic2/ancillary-clues'element={<AncillaryClues2 />} />
          <Route path='/topic2/closure' element={<Closure2 />} />
          <Route path='/topic2/exploring-and-responding' element={<ExploringandResponding2 />} />
          <Route path='/topic2/appraising-venture'element={<AppraisingVenture2 />} />
          <Route path='/topic2/enlightening-projection' element={<EnlighteningProjection2 />} />



          <Route path='/topic3/inception' element={<Inception3 /> } />
          <Route path='/topic3/exploring-prior-knowledge' element={<ExploringPriorKnowledge3 />} />
          <Route path='/topic3/allowing-venture' element={<AllowingVenture3 />} />
          <Route path='/topic3/ancillary-clues' element={<AncillaryClues3 />} />
          <Route path='/topic3/closure' element={<Closure3 />} /> 
          <Route path='/topic3/appraising-venture' element={<AppraisingVenture3 />} />
          <Route path='/topic3/enlightening-projection' element={<EnlighteningProjection3 />} />
          <Route path='/topic3/exploring-and-responding' element={<ExploringandResponding3 />} />


    
    




          <Route path='/topic4/inception' element={<Inception4 />} />
          <Route path='/topic4/closure' element={<Closure4 />} />
          <Route path='/topic4/allowing-venture' element={<AllowingVenture4 />} />
          <Route path='/topic4/exploring-and-responding' element={<ExploringandResponding4 />} />
          <Route path='/topic4/ancillary-clues' element={<AncillaryClues4 />} />
          <Route path='/topic4/enlightening-projection' element={<EnlighteningProjection4 />} />
          <Route path='/topic4/appraising-venture' element={<AppraisingVenture4 />} />
          <Route path='/topic4/exploring-prior-knowledge' element={<ExploringPriorKnowledge4 />} />
 




          <Route path='/topic5/inception' element={<Inception5 />} />
          <Route path='/topic5/closure' element={<Closure5 />} />
          <Route path='./topic5/enlightening-projection' element={<EnlighteningProjection5 />} />
     


          
          <Route path='/topic5/allowing-venture' element={<AllowingVenture5 /> } />
          <Route path='/topic5/appraising-venture' element={<AppraisingVenture5 /> } />
          <Route path='/topic5/exploring-prior-knowledege' element={<ExploringPriorKnowledge5 />} />
          <Route path='/topic5/exploring-and-responding' element={<ExploringandResponding5 />} />
          <Route path='/topic5/ancillary-clues' element={<AncillaryClues5 />} />




          <Route path='/topic6/inception' element={<Inception6 />} />
          <Route path='/topic6/closure' element={<Closure6 /> }/>
          <Route path='/topic6/allowing-venture' element={<AllowingVenture6 /> } />
          <Route path='/topic6/appraising-venture' element={<AppraisingVenture6 />} />
          <Route path='/topic6/exploring-prior-knowledege' element={<ExploringPriorKnowledge6 />} />
          <Route path='/topic6/exploring-and-responding' element={<ExploringandResponding6 />} />
          <Route path='/topic6/ancillary-clues' element={<AncillaryClues6 />} />
          <Route path='/topic6/enlightening-projection' element={<EnlighteningProjection6 />} />







        <Route path='/topic7/inception' element={<Inception7 />} />
        <Route path='/topic7/closure' element={<Closure7 />} />
        <Route path='/topic7/allowing-venture' element={<AllowingVenture7 />} />
        <Route path='/topic7/appraising-venture' element={<AppraisingVenture7 />} />
        <Route path='/topic7/exploring-and-responding' element={<ExploringAndResponding7 />} />
        <Route path='/topic7/exploring-prior-knowledege' element={<ExploringPriorKnowledge7 />} />
        <Route path='/topic7/ancillary-clues' element={<AncillaryClues7 />} />
        <Route path='/topic7/enlightening-projection' element={<EnlighteningProjection7 />} />





       <Route path='/topic8/inception' element={<Inception8 />} />
       <Route path='/topic8/closure' element={<Closure8 />} />
       <Route path='/topic8/allowing-venture' element={<AllowingVenture8 />} />
       <Route path='/topic8/appraising-venture' element={<AppraisingVenture8 />} />
       <Route path='/topic8/exploring-prior-knowledege' element={<ExploringPriorKnowledge8 />} />
       <Route path='/topic8/exploring-and-responding' element={<ExploringAndResponding8 />} />
       <Route path='/topic8/ancillary-clues' element={<AncillaryClues8 />} />
       <Route path='/topic8/enlightening-projection' element={<EnlighteningProjection8 />} />
 




      <Route path='/topic9/inception' element={<Inception9 />} />
      <Route path='/topic9/closure' element={<Closure9 />} />
      <Route path='/topic9/allowing-venture' element={<AllowingVenture9 />} />
      <Route path='/topic9/appraising-venture' element={<AppraisingVenture9 />} />
      <Route path='/topic9/exploring-prior-knowledege' element={<ExploringPriorKnowledge9 />} />
      <Route path='/topic9/exploring-and-responding' element={<ExploringAndResponding9 />} />
      <Route path='/topic9/ancillary-clues' element={<AncillaryClues9 />} />
      <Route path='/topic9/enlightening-projection' element={<EnlighteningProjection9 />} />





      <Route path='/topic10/inception' element={<Inception10  />} />
      <Route path='/topic10/closure' element={<Closure10 />} />
      <Route path='/topic10/allowing-venture' element={<AllowingVenture10 />} />
      <Route path='/topic10/appraising-venture' element={<AppraisingVenture10 />} />
      <Route path='/topic10/exploring-prior-knowledege' element={<ExploringPriorKnowledge10/>} />
      <Route path='/topic10/enlightening-projection' element={<EnlighteningProjection10 />} />
      <Route path='/topic10/ancillary-clues' element={<AncillaryClues10/>} />
      <Route path='/topic10/exploring-and-responding' element={<ExploringAndResponding10 />} />






      


        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
