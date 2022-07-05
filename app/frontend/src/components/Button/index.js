import React from 'react';

function Button({
    name,
    value,
}){
    return(
        <input type="submit" name={name} value={ value } />
   );
}

export default Button;