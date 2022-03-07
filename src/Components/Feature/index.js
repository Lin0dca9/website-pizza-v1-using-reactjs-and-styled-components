import React from "react";
import {FeatureContainer, FeaturedButton} from './FeatureElements';


const Featured = () =>{
    return(
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p>Truffle alfredo sauce topped with 24 carat
                gold dust.</p>
                <FeaturedButton>Order Now</FeaturedButton>
        </FeatureContainer>
    );
}
export  default Featured;