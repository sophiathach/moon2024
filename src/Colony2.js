import React from 'react';
import colony2 from "./images/colony2.png";
import whiteNoise from "./sounds/white_noise.mp3"

interface Colony2Props {
    history: History;
}
function Colony2 (props: Colony2Props) {

        return (
            <>
                <header className="App-header">
                    <img width="100%" src={colony2}  onClick={handleClick}/>
                    <audio autoPlay loop src={whiteNoise}/>
                </header>
            </>
        );

        function handleClick(){
            props.history.push('/space/colony2/carousel2');
        }

}
export default Colony2;
