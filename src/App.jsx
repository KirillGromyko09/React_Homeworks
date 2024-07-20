import { useState } from "react";
import Carousel from './components/Carousel.jsx'
function App() {
    const images = [
        'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
        'https://lh3.googleusercontent.com/proxy/XPq1MGV8ZK7kqh1G8Oz2tdAsFGy3bdWo1kkWbW_URCRehUAT-iVP4Abr55wcbwhpev-sRA33ZbcdgDYlN98MCIw0ld3fAU4gw9wAGfdufp3P_nZp',
        'https://wfc.tv/upload/iblock/bdd/yj3tmdesguq76atix7hl918v3rxr06pl.jpg'
    ]
    return (
        <div className={App}>
            <Carousel images={images}></Carousel>
        </div>
    )
}

export default App;
