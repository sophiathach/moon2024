import React, {useLayoutEffect} from 'react';
import colony1 from "./images/colony1.png";
import whiteNoise from "./sounds/white_noise.mp3"

interface Colony1Props {
    history: History;
}
function Colony1 (props: Colony1Props) {

        return (
            <>
                <header className="App-header">
                    <img width="100%" src={colony1} onClick={handleClick}/>
                    <audio autoPlay loop src={whiteNoise}/>
                </header>
            </>
        );

    function handleClick(){

        props.history.push('/space/colony1/carousel1');
    }

}
export default Colony1;
