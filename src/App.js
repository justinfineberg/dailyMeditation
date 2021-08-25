import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'

function App() {
  //remove inital when i get api's all working. 
  const [news, setNews] = useState('');
  const [bitcoin, setBitcoin] = useState('$60,000');
  const [timeOfDay, setTimeOfDay] = useState('Good Morning')
  const [location, setLocation] = useState('New York City')
  const [weather, setWeater] = useState('45 degrees and sunny')
  const [firstLoad, setFirstLoad] = useState(false);
  const [secondLoad, setSecondLoad] = useState(false);
  const [thirdLoad, setThirdLoad] = useState(false);
  const [fourthLoad, setFourthLoad] = useState(false);
  const [fifthLoad, setFifthLoad] = useState(false);
  const [hidden, setHidden] = useState({display: "block"});

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

useEffect(()=>{
  axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=dff3437470ad4e0eba1e30d33e702061')
  .then(res=>{
    console.log(res.data.articles[0]["title"])
    setNews(res.data.articles[0]["title"])
  }).catch(err=>{
    console.log(err)
  })
},[])

// useEffect(()=>{
//   axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=64074cbaa4888425569f91d11f3467af')
//   .then(res=>{
//     console.log(res.data)
//   })
// },[])

useEffect(()=>{
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(res=>{
    let currentPrice = res.data.bpi.USD.rate
    setBitcoin(res.data.bpi.USD.rate)
  
  }).catch(err=>{
    console.log(err)
  })
},[])

setTimeout(function(){
  setFirstLoad(true);
},1000)

setTimeout(function(){
  setSecondLoad(true);
},2000)

setTimeout(function(){
  setThirdLoad(true);
},3000)

let fourth = setTimeout(function(){
  setFourthLoad(true);
},6000)

setTimeout(function(){
  setFifthLoad(true);
  setHidden({display: "none"});
},12000)


  return (
    <>
    <div className="h-screen  m-auto">
    <div className="flex justify-evenly w-full">
     <img className=" w-60 mb-5" src="https://ouch-cdn2.icons8.com/iw5GOwYronJrGKYicCLarvmHbn26ZFEvb1u-6YrpUuk/rs:fit:211:177/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEy/LzI0YjVmODQ5LTg1/NGUtNDgwOC1hM2Ji/LTNhYzY4MWQ1ZWQ4/Zi5wbmc.png" />
     <img className=" w-60 mb-5" src="https://ouch-cdn2.icons8.com/1rL7kh1rfg96CgnfJEMUSLeyC-PSKVjEJMhVPZpLqaw/rs:fit:972:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODQ2/LzVlZjY5ZTViLWU5/OGItNDk5MS05YjBm/LTI5YmZmMzFlMGIz/Yi5wbmc.png" />
     <img className=" w-60 mb-5" src="https://ouch-cdn2.icons8.com/X7bgJgV1a3P4fx-2NcyV4GoSRn2zGekctF3kLcZd4Ao/rs:fit:596:561/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2YzYmZhNzBjLTBh/MzQtNDBlYS05N2Zj/LWU3MWJkMDAzMzYw/NC5wbmc.png" />
     <img className=" w-60 mb-5" src="https://ouch-cdn2.icons8.com/iw5GOwYronJrGKYicCLarvmHbn26ZFEvb1u-6YrpUuk/rs:fit:211:177/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEy/LzI0YjVmODQ5LTg1/NGUtNDgwOC1hM2Ji/LTNhYzY4MWQ1ZWQ4/Zi5wbmc.png" />
     <img className=" w-60 mb-5" src="https://ouch-cdn2.icons8.com/1rL7kh1rfg96CgnfJEMUSLeyC-PSKVjEJMhVPZpLqaw/rs:fit:972:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODQ2/LzVlZjY5ZTViLWU5/OGItNDk5MS05YjBm/LTI5YmZmMzFlMGIz/Yi5wbmc.png" />
     <img className=" w-60 mb-5" src="https://ouch-cdn2.icons8.com/X7bgJgV1a3P4fx-2NcyV4GoSRn2zGekctF3kLcZd4Ao/rs:fit:596:561/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDkz/L2YzYmZhNzBjLTBh/MzQtNDBlYS05N2Zj/LWU3MWJkMDAzMzYw/NC5wbmc.png" />

     </div>
      <div className=" w-2/3 m-auto p-16">
      <div  className="w-2/3 m-auto font-bold text-white">
      
      {firstLoad && <h2 className="testFade transition ease-in duration-300 text-6xl mb-7">{timeOfDay},</h2>}
      {thirdLoad && <h2 className=" testFade text-2xl p-2 m-3">The weather in {location} is <span className="text-yellow-200"> {weather}. </span></h2>}
      {thirdLoad && <h2 className="testFade text-2xl p-2 m-3">The price of Bitcoin is <span className="text-green-200"> {bitcoin} </span> dollars.</h2>}
      {thirdLoad && <h2 className="testFade text-2xl p-2 m-3"> The top <span className="text-red-200"> news </span>  story is that {news}.</h2>}
      </div>
      <div className="flex flex-col items-center mt-40 ">
        {fourthLoad && <div style={hidden} className="w-2/3 testFade m-auto text-center font-bold ">
          <h3 className="text-3xl text-white">
            Creating a custom guided <span className="underline"> meditation </span> based on the <span className="text-yellow-200"> weather,</span> the price of <span className="text-green-200"> Bitcoin </span>, and the <span className="text-red-200"> news </span><span className="animate-ping">...</span>
          </h3>
        </div>}
        {fifthLoad && 
          <figure className="testFade">
            <h3 className="text-center text-white mb-3 text-lg">Enjoy. </h3>
             <audio
              controls
              src="/media/cc0-audio/t-rex-roar.mp3">
                Your browser does not support the
                <code>audio</code> element.
            </audio>
          
          </figure>
        }
      </div>
      </div>
     
    </div>
    </>
  );
}

export default App;
