import React from 'react';
import "./About.css";

export default function About(){
    document.title = "XiangXiChen/About";
    return (
        <main>
            <div>
                <title>XiangXiChen/About</title>
            </div>
            <div className="Name">
                <h1>Xiang Xi Chen</h1>
            </div>
            <div>
                <img src="https://pm1.narvii.com/6843/fd903210c135b100d964bc2afa3e2ff49ca2863av2_hq.jpg" alt="Jin" className="Photo"/>
            </div>
            <section>
                <div className="Description">
                    <h2>A little bit about myself. I am currently a third year computer science student studying at the University of British Columbia. 
                        My professional interests are game development and machine learning. </h2>
                    <h2>In the past, I have've worked as a web developer for FACTSnet (Family and Communuity Twinning Society) 
                        through managing and maintaing their public websites. </h2>
                        
                </div>
            </section>
        </main>
    )


        
}