import React from 'react';

const Input = (props) => {
    const {name, label, value, type, onChange} = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type}
                   className="form-control"
                   id={name}
                   name={name}
                   value={value}
                   onChange={onChange}
            />
        </div>
    );
};

export default Input;
