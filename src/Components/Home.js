import React from 'react';
import "./Home.css";


export default function Home(){
    document.title = "XiangXiChen/Home";
    return (
        <main>
            <div>
                <img src="https://st1.bollywoodlife.com/wp-content/uploads/2020/11/Jungkook-BTS.jpg" alt="Jungkook" className="Profile-Photo" />
            </div>

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
        </main>
    )

}