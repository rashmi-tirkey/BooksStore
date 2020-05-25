import React  from 'react'

const ErrorMessage = ({text}) =>{
    //console.log("text");
    return <div className="error-wrapper" >
        {text}
    </div>;
}
export default ErrorMessage;
