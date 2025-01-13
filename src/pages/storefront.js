import React, { useState } from "react";
import { Link } from "react-router-dom";

function Storefront() {
  const [discovered, setDiscovered] = useState(false);
  const [money, setMoney] = useState(0);
  const [showTextbox, setShowTextbox] = useState(false);

  let name = "David";

  function updateMoney(amt) {
    if (money + amt < 0) // cant afford check
      return setMoney(0) 
    
    setMoney(money + amt)
  }

  
  async function displayText(text, speed) {
    setShowTextbox(true)
    await new Promise(r => setTimeout(r, 100)); // small timeout to let program process textbox appearance
    let textbox = document.getElementById("textbox")
    textbox.innerHTML = ""
    for (let i=0; i < text.length; i++) {
      let letter = text.charAt(i);
      textbox.textContent += letter
      await new Promise(r => setTimeout(r, speed));
        }
    // blinking cursor code here
  }


  return (
    <div className='flex flex-col gap-2 items-center justify-center w-4/5 h-screen m-auto'> {/* central column */}
      <div className='flex justify-center items-center h-16'>
        <h1 className='text-theme-deskblue drop-shadow-theme text-7xl'>{discovered ? "storefront" : "??????"}</h1>
      </div>
      {/* image zone */}
      <div className='relative w-[1280px] h-[724px] border-4 border-theme-deskblue drop-shadow-theme'> 
        <img src="/assets/storefront/desk-larger.png" alt="black" className='absolute w-full h-full'/>
        <img src="/assets/storefront/bushes-larger.png" alt="bushes" className='absolute w-full h-full' />
        <img src="/assets/storefront/empty_shelves-larger.png" alt="bushes" className='absolute w-full h-full' />
        <img src="/assets/storefront/shelf_jar-larger.gif" alt="bushes" className='absolute w-full h-full' />
        <div className='flex justify-start absolute right-2 top-2 gap-2 px-4 py-2 bg-black border-4 border-theme-deskblue w-fit'> {/* money box */}
          <img src="/assets/coin_placeholder.png" alt="money" className='size-7'/>
          <span className='text-white text-xl'>{money}</span>
        </div>
      </div>

      {/* button zone */}
      <div className='flex justify-between w-[1280px]'>
        <div className='flex grid grid-cols-6 gap-2 w-fit h-full items-center drop-shadow-theme'>
          <button className='bg-theme-deskblue hover:bg-theme-active text-black px-2 h-full' onClick={() => setDiscovered(true)}>look closer</button>
          <button className='bg-theme-deskblue hover:bg-theme-active text-black px-2 h-full' onClick={() => setDiscovered(false)}>forget</button>
          <button className='bg-theme-deskblue hover:bg-theme-active text-black px-2 h-full' onClick={() => updateMoney(50)}>+50</button>
          <button className='bg-theme-deskblue hover:bg-theme-active text-black px-2 h-full' onClick={() => updateMoney(-50)}>-50</button> 
          <button className='bg-theme-deskblue hover:bg-theme-active text-black px-2 h-full' onClick={() => displayText("hello there, "+name, 100)}>speak</button>
          <button className='bg-theme-deskblue hover:bg-theme-active text-black px-2 h-full' onClick={() => setShowTextbox(!showTextbox)}>the box</button>
        </div>
        <div className="flex flex-col">
          <p className="text-theme-deskblue">{name}</p>
          <p className="text-theme-deskblue">BITCHES: 0</p>
        </div>

        <Link to="/hoverpage">
          <button className='bg-theme-deskblue hover:bg-theme-active text-black px-2'>
            elsewhere
          </button>
        </Link>
      </div>
      {showTextbox && 
      <div onClick={() => setShowTextbox(false)} className="flex absolute bottom-20 w-3/5 h-1/5 p-2 border-4 border-theme-deskblue bg-black hover:cursor-pointer">
        <span id="textbox" className='text-white text-2xl'></span>
      </div>
      }
    </div>
      
      
      

      
  );
}

export default Storefront;
