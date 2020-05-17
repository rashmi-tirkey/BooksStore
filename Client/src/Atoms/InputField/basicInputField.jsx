
 import React from 'react';
 import TextField from '@material-ui/core/TextField';

 import  './basicInputField.scss';

const BasicTextFields = ({type,name,label,functionName,value}) => 
        <TextField id="standard-basic" type={type} name ={name} label={label} value={value} onChange={functionName} />
 
export default BasicTextFields;