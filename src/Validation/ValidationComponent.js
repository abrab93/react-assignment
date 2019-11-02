import React from 'react';

const validationComponent = (props) =>{

    const textLegth = props.textLegth;
    let validationMsg = 'Text too short';

    if(textLegth >= 5){
        validationMsg = 'Text long enough';
    }
    return(
        <div>
            <p>{validationMsg}</p>
        </div>
    )
}

export default validationComponent;