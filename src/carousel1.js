import React from 'react';
import image1 from './images/colony1/earthfrommoon.jpeg';
import image3 from './images/colony1/tranquility.jpeg';
import image4 from './images/colony1/tranquility2.jpeg';
import speech from "./sounds/whole_story.mp3";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface Carousel1Props {
    history: History;
}
function Carousel1 (props: Carousel1Props) {

        return (
            <>
                    <Carousel autoplay={true} infiniteLoop={true} transitionTime={10}>
                    <div>
                        <img src={image1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={image4} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={image3} />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
                    <audio autoPlay src={speech}/>
            </>
        );

}
export default Carousel1;
