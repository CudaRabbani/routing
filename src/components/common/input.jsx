import React from 'react';

const Input = (props) => {
    const {name, label, value, type, error, onChange} = props;
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
            {error && <div className="alert alert-danger m-1">{error}</div>}
        </div>
    );
};

export default Input;
