import React from 'react';
import spaceMan from "./images/spaceman1.png";
import spaceMan2 from "./images/spaceman2.png"
import readyAudio from "./sounds/Ready.mp3";


interface SpaceChoiceProps {
    history: History;
}

function SpaceChoice(props: SpaceChoiceProps){
    // const [door, setDoor] = useState<boolean>();
    const ready = new Audio(readyAudio);

    return (
        <>
            <body className="App-header">
                <h2>Choose which colony we will explore!</h2>
                <div className={'space'}>
                <img src={spaceMan} className="door space0" alt="space-0" value="space-0"
                     onClick={handleClick}/>
                <img src={spaceMan2} className="door space1" alt="space-1" value="space-1"
                     onClick={handleClick}/>
                </div>
            </body>
        </>
    );


    function handleClick(e:Event){
    const firstColony = e.target.classList.contains('space0');
     ready.play();
        ready.onended = function() {
            firstColony ? props.history.push('/space/colony1') : props.history.push('/space/colony2');
            }
    }
}

export default SpaceChoice;
