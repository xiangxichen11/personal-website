import React from 'react';
import "./Home.css";


export default function Home(){
    document.title = "XiangXiChen/Home";
    return (
        <body>
            <div>
                <img src="https://st1.bollywoodlife.com/wp-content/uploads/2020/11/Jungkook-BTS.jpg" alt="Jungkook" className="Profile-Photo" />
            </div>

            <div id="vanta-canvas"></div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
            <script>
                VANTA.FOG(
                    el: "#vanta-canvas",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00
                )  
            </script>
            
            <section>
                <div className="banner">
                    <div className="hi">
                        <h1>Hi!</h1>
                    </div>
                    <div className="typewriter">
                            <h2>I'm Xiang Xi. Glad you could make it!</h2>
                    </div>
                </div>
                

            </section>
        </body>
    )

}

