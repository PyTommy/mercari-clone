import React from 'react'
import classes from './Input.module.scss';

const Input = ({
    type, 
    placeholder, 
    value, 
    onChange, 
    name, 
    required = false, 
    className,
    styles
}) => {
    let input;
    if (type === "textarea") {
        input = (<textarea 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
            className={[classes.Textarea, className].join(" ")}
            styles={styles}
        />);
    } else {
        input = (<input 
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}            
            className={[classes.Input, className].join(" ")}
            styles={classes}
        />);
    }

    return input;
}

export default Input;
