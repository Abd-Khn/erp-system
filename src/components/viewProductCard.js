import React from 'react'

const ViewProductCard = () => {
  return (
    <div className="flex w-full max-w-lg lg:pl-20  pt-20 md:pl-0 sm:pl-0">
        <div class=" w-60  shadow-lg">
           
            <div className='flex'>

        <button className='pl-40' ><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="20px" height="20px"><radialGradient id="XxuzckEKxQAhu215VR7vra" cx="36" cy="32" r="26.875" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#afeeff"/><stop offset=".193" stop-color="#bbf1ff"/><stop offset=".703" stop-color="#d7f8ff"/><stop offset="1" stop-color="#e1faff"/></radialGradient><path fill="url(#XxuzckEKxQAhu215VR7vra)" d="M5.5,61L5.5,61C3.015,61,1,58.985,1,56.5v0C1,54.015,3.015,52,5.5,52h0 c2.485,0,4.5,2.015,4.5,4.5v0C10,58.985,7.985,61,5.5,61z"/><radialGradient id="XxuzckEKxQAhu215VR7vrb" cx="32" cy="31.5" r="30.775" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#afeeff"/><stop offset=".193" stop-color="#bbf1ff"/><stop offset=".703" stop-color="#d7f8ff"/><stop offset="1" stop-color="#e1faff"/></radialGradient><path fill="url(#XxuzckEKxQAhu215VR7vrb)" d="M64,24L64,24c0-2.761-2.239-5-5-5h-5c-2.761,0-5-2.238-5-5v0c0-2.762,2.238-5,5-5h0.565 C56.48,9,58,7.48,58,5.605L58,5.5C58,3.567,56.433,2,54.5,2l-38,0c-1.926,0-3.49,1.556-3.5,3.483L13,5.5 C12.99,7.43,14.552,9,16.483,9H17c2.209,0,4,1.791,4,4v0c0,2.209-1.791,4-4,4H5c-2.761,0-5,2.239-5,5v0c0,2.761,2.239,5,5,5h1 c2.209,0,4,1.791,4,4v0c0,2.209-1.791,4-4,4H5.5C2.462,35,0,37.462,0,40.5v0C0,43.538,2.462,46,5.5,46H19c1.657,0,3,1.343,3,3v0 c0,1.657-1.343,3-3,3h-1.5c-2.485,0-4.5,2.015-4.5,4.5v0c0,2.485,2.015,4.5,4.5,4.5H33h22c2.209,0,4-1.791,4-4v0 c0-2.209-1.791-4-4-4h-6.5c-1.933,0-3.5-1.567-3.5-3.5v0c0-1.933,1.567-3.5,3.5-3.5H60c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4 h-1.5c-2.485,0-4.5-2.015-4.5-4.5v0c0-2.485,2.015-4.5,4.5-4.5H59C61.761,29,64,26.761,64,24z"/><linearGradient id="XxuzckEKxQAhu215VR7vrc" x1="10.098" x2="10.098" y1="50.804" y2="57" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#a4a4a4"/><stop offset=".63" stop-color="#7f7f7f"/><stop offset="1" stop-color="#6f6f6f"/><stop offset="1" stop-color="#6f6f6f"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vrc)" d="M8.02,50.804l-1,5c-0.065,0.328,0.037,0.667,0.273,0.903C7.482,56.896,7.737,57,8,57 c0.065,0,0.131-0.007,0.196-0.02l5-1L8.02,50.804z"/><linearGradient id="XxuzckEKxQAhu215VR7vrd" x1="28.5" x2="28.5" y1="55" y2="16" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ff8b67"/><stop offset=".847" stop-color="#ffa76a"/><stop offset="1" stop-color="#ffad6b"/><stop offset="1" stop-color="#ffad6b"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vrd)" d="M47.707,28.293l-12-12c-0.391-0.391-1.023-0.391-1.414,0l-25,25 c-0.391,0.391-0.391,1.023,0,1.414l12,12C21.488,54.902,21.744,55,22,55s0.512-0.098,0.707-0.293l25-25 C48.098,29.316,48.098,28.684,47.707,28.293z"/><linearGradient id="XxuzckEKxQAhu215VR7vre" x1="15.5" x2="15.5" y1="56" y2="41.001" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ffc662"/><stop offset=".004" stop-color="#ffc662"/><stop offset=".609" stop-color="#ffc582"/><stop offset="1" stop-color="#ffc491"/><stop offset="1" stop-color="#ffc491"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vre)" d="M21.986,47.836C21.906,47.354,21.489,47,21,47h-4v-4c0-0.489-0.354-0.906-0.836-0.986l-6-1 c-0.271-0.043-0.548,0.023-0.768,0.188c-0.219,0.166-0.36,0.414-0.391,0.688l-1,9c-0.033,0.302,0.072,0.603,0.287,0.817l4,4 C12.481,55.896,12.736,56,13,56c0.037,0,0.073-0.002,0.11-0.006l9-1c0.273-0.03,0.521-0.172,0.688-0.391 c0.165-0.22,0.233-0.497,0.188-0.768L21.986,47.836z"/><linearGradient id="XxuzckEKxQAhu215VR7vrf" x1="49.736" x2="49.736" y1="23.5" y2="5.028" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#ff634d"/><stop offset=".204" stop-color="#fe6464"/><stop offset=".521" stop-color="#fc6581"/><stop offset=".794" stop-color="#fa6694"/><stop offset=".989" stop-color="#fa669a"/><stop offset="1" stop-color="#fa669a"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vrf)" d="M57.603,13.188l-6.791-6.791c-1.826-1.826-4.797-1.826-6.623,0l-3.396,3.396 c-0.391,0.391-0.391,1.023,0,1.414l12,12c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l3.396-3.396 C59.429,17.985,59.429,15.015,57.603,13.188z"/><linearGradient id="XxuzckEKxQAhu215VR7vrg" x1="44" x2="44" y1="9.026" y2="30.974" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#b2b2b2"/><stop offset=".594" stop-color="#949494"/><stop offset="1" stop-color="#848484"/><stop offset="1" stop-color="#848484"/></linearGradient><path fill="url(#XxuzckEKxQAhu215VR7vrg)" d="M53.957,21.543l-11.5-11.5c-1.355-1.355-3.559-1.355-4.914,0l-3.5,3.5 c-1.354,1.354-1.354,3.56,0,4.914l11.5,11.5c0.678,0.678,1.567,1.017,2.457,1.017s1.779-0.339,2.457-1.017l3.5-3.5 C55.312,25.103,55.312,22.897,53.957,21.543z"/></svg></button>

            <button className='pl-6'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="20px" height="20px"><path fill="#90caf9" d="M14.149,18.39l2.66,24.823C16.917,44.229,17.775,45,18.797,45h18.405	c1.022,0,1.879-0.771,1.988-1.787l2.661-24.823c0.077-0.72-0.487-1.348-1.211-1.348H15.36C14.636,17.043,14.072,17.67,14.149,18.39z"/><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M36.249,29.839L38,13.5"/><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M10.608,19.171l2.009,18.755c0.218,2.033,1.933,3.574,3.977,3.574h14.811c2.044,0,3.759-1.541,3.977-3.574l0.373-3.48"/><line x1="7.5" x2="40.5" y1="13.5" y2="13.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/><line x1="20.5" x2="27.5" y1="5.5" y2="5.5" fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3"/><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M10,13.5l2.813-4.219c0.741-1.113,1.99-1.781,3.328-1.781H31.86c1.337,0,2.586,0.668,3.328,1.781L38,13.5"/></svg></button>
                    </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 w-20">Name</div>
  
    <p class="text-gray-700 text-base">
      Syed Muhammad Saqib
    </p>
    
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Category</div>
    <p class="text-gray-700 text-base">
      Tech 
    </p>
    
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Description</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit iusto veritatis delectus! 
    </p>
    
  </div>
    
</div>
        
    </div>
  )
}

export default ViewProductCard