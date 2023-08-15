import React from "react";
import widgets from '../img/front-images.png'

const Header = () => {
    return (
        <header>
            <div className="front-texts">
                <h1>Discovering Your Best Persona is just few steps away</h1>
                <p>Ingenious and Amazing designs to bring out the ingenuity in every person</p>
               <div className="links"> 
                    <a href="/shop" className="explore" title="shop">Explore</a>
                    <a href="/shop" className="explore" title="shop">View Some Amazing Offers</a>
               </div>
            </div>
            <div className="widgets">
                <img src={widgets} alt="widgets"/>
            </div>
        </header>
    )
}

export default Header;