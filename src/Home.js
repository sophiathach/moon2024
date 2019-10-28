import React from 'react';
import door from "./images/door.svg";
import houstonAudio from "./sounds/Houston.mp3";


interface HomeProps {
    history: History;
}
function Home (props: HomeProps) {

    const houston = new Audio(houstonAudio);
        return (
            <>
                <body className="App-header">
                <h1> Adventure Portal </h1>
                    <h1> Welcome to our next journey</h1>
                    <h3> Choose where we should go</h3>
                <div className="doorThing">
                    <div>
                    <img src={door} className="door" alt="door-0"
                         onClick={async () => handleClick()}/>
                         <p>Stay on Earth</p>
                    </div>
                    <div>
                    <img src={door} className="door" alt="door-1"
                         onClick={async () => handleClick()}/>
                    <p>To The Moon</p>
                    </div>
                    <div>
                    <img src={door} className="door" alt="door-2"
                         onClick={async () => handleClick()}/>
                         <p>ISS</p>
                    </div>
                    </div>
                </body>
            </>
        );

    async function handleClick() {
        houston.play();
        houston.onended = function(){ props.history.push('/space')};

    }
    
}
export default Home;
