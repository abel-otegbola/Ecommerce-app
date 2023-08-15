import React from "react";
import comfysofa from '../img/comfysofa.png'
import sublimation from '../img/sublimation.png'
import infos from '../img/infos.png'
import illustration_ecommerce from '../img/illustration-ecommerce.png'
import illustration_ecommerce2 from '../img/illustration-ecommerce2.png'

const Main = () => {
    return (
        <div className="main">
            <img src={infos} className="infos" alt="infos"/>
            <section>
                <h2>We Produce The Resources, You Customize Your Persona</h2>
                <div className="texts">
                    <h1>Get and Order your products in just these simple steps</h1>
                    <p>Create your own design to your preference and get your product delivered to your doorsteps.</p>
                </div>
                <img src={comfysofa} alt="steps"/>
            </section>
            <section>
                <h2>OUR SERVICES</h2>
                <img src={sublimation} alt="steps"/>
                <div className="texts">
                    <h1>Sublimation Designs</h1>
                    <p>Amazing sublimation designs premade and custom made</p>
                    <button>Find Design</button>
                </div>
            </section>
            
            <section>
                <div className="texts">
                    <h1>Brands Designs</h1>
                    <p>Get unique designs for your brand and customize on different items.</p>
                    <button>Find Design</button>
                </div>
                <img src={illustration_ecommerce2} alt="steps"/>
            </section>
            <section>
                <h2>GET PRODUCT NOW</h2>
                <img src={illustration_ecommerce} alt="steps"/>
                <div className="texts">
                    <button>Go to shop</button>
                </div>
            </section>
        </div>
    )
}

export default Main;