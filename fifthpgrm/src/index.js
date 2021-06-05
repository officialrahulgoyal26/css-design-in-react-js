import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const myfname = "RAHUL";
const mylast  = "goyal";
const Time = new Date().toLocaleTimeString();
const img = "https://picsum.photos/204/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/230/300";


const link = "https://www.google.com";
const link2 = "https://www.google.com";
ReactDOM.render(
  <>
  <h1 className="heading">hi! welcome to my site</h1>
  <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tempore eligendi sint,
   debitis eos maxime amet cum repellat maiores quos optio velit harum commodi adipisci at, dignissimos minima. Asperiores, quibusdam?</p>
   <h1> {`MY NAME IS  ${myfname} And My Last Name Is ${mylast}`}</h1>
   <h1>here is my fav movies</h1>
   <p>see</p>
   <ol>
     <li>jhf</li>
     <li>jhe</li>
     <li>jh3</li>
     <li>jwf</li>
   </ol>
   <h1>time is {Time}</h1>
   <div className="img_div">
   <a href={link} target = "blank"><img src={img} alt="none" /></a>

   <img src={img2} alt="" />
   <a href={link2} target = "blank"><img src={img3} alt="none" /></a>
   </div>
   

 

  
  </>,

  document.getElementById('root')
);