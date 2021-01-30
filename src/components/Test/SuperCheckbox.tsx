import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./superInput.module.css";


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
};

export const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, 
        onChange, onChangeChecked,
        className, spanClassName,
        children, 
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
       onChangeChecked && onChangeChecked(e.currentTarget.checked)  
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ""}`;

    return (
        <label>
           <div className={s.checkboxStyle}>
           <input
                type={"checkbox"}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} 
            />
           </div>
            {children && <span className={s.spanClassName}>{children}</span>}
        </label> 
    );
}

