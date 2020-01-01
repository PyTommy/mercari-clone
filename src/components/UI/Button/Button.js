import React from 'react'
import classes from './Button.module.scss';

const Button = ({
    children,
    className,
    styles,
    onClick,
    btnType = ""
}) => {
    let appliedClasses = [classes.Button];
    className && appliedClasses.push(className);

    // Colors
    btnType.includes("color-primary") && appliedClasses.push(classes.colorPrimary);
    btnType.includes("color-orange") && appliedClasses.push(classes.colorOrange);
    btnType.includes("color-danger") && appliedClasses.push(classes.colorDanger);

    // Size
    btnType.includes("size-sm") && appliedClasses.push(classes.sizeSmall);
    btnType.includes("size-lg") && appliedClasses.push(classes.sizeLarge);

    return (
        <button
            onClick={onClick}
            styles={styles}
            className={appliedClasses.join(" ")}
            >
            {children}
        </button>
    )
}

export default Button
