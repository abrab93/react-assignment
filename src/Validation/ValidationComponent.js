import React from 'react';

const validationComponent = (props) =>{

    const textLegth = props.textLegth;
    let validationMsg = (
        <p>Text too short</p>
    );

    if(textLegth >= 5){
        validationMsg = (
            <p>Text long enough</p>
        );
    }
    return(
        <div>
            {validationMsg}
        </div>
    )
}

export default validationComponent;