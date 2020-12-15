import React from 'react'

//img
import genifyLogo from "../img/genifyLogo.png"

function Header() {
    return (
        <div class="flex flex-row justify-between bg-purple-600">
            <div class="flex flex-row "><img alt="" src={genifyLogo} class="h-20"/></div> 
            <div class="flex flex-row "> <p class="mr-10 text-2xl">Products</p> <p class="mr-10 text-2xl">Use Cases</p> <p class="mr-10 text-2xl">Team</p> <p class="mr-10 text-2xl">Contact Us</p>  </div>
           
        </div>
    )
}

export default Header
