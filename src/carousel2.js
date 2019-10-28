import React from 'react';
import image1 from './images/colony1/earthfrommoon.jpeg';
import image2 from './images/colony2/southpole1.jpeg';
import image3 from './images/colony2/southpole2.jpeg';
import image4 from './images/colony2/southpole3.jpeg';
import image5 from './images/colony2/southpole4.jpeg';
import image6 from './images/colony2/southpole5.jpeg';
import image7 from './images/colony2/southpole6.jpeg';
import speech from "./sounds/whole_story.mp3";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface Carousel2Props {
    history: History;
}
function Carousel2 (props: Carousel1Props) {

        return (
            <>
                    <Carousel autoplay={true} infiniteLoop={true} transitionTime={10}>
                    <div>
                        <img src={image1} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={image2} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={image3} />
                        <p className="legend">Legend 3</p>
                    </div>                   <div>
                        <img src={image4} />
                        <p className="legend">Legend 3</p>
                    </div>
                        <div>
                            <img src={image5} />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img src={image5} />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img src={image5} />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img src={image5} />
                            <p className="legend">Legend 3</p>
                        </div>

                </Carousel>
                    <audio autoPlay src={speech}/>
            </>
        );

}
export default Carousel2;
