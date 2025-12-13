'use client'
import React, { useState, useRef } from 'react'
import { FiCalendar } from 'react-icons/fi'

const DateInput = ({ 
    label, 
    name, 
    value, 
    onChange, 
    placeholder, 
    required,
    className = "form-control"
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.showPicker()
        }
    }

    return (
        <div className="position-relative">
            <input
                ref={inputRef}
                type="date"
                className={className}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    paddingRight: '40px'
                }}
            />
            <div 
                className="position-absolute"
                style={{
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    color: isFocused ? '#fdba12' : 'var(--bs-body-color)',
                    transition: 'color 0.3s ease',
                    cursor: 'pointer'
                }}
                onClick={handleIconClick}
            >
                <FiCalendar size={18} />
            </div>
        </div>
    )
}

export default DateInput
