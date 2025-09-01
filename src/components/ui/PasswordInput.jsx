"use client";
import { LockIcon , EyeIcon , EyeOff } from "lucide-react";
import React from "react";
import { useToggle } from "react-use";
export default function PasswordInput({placeholder , icon}) {
    const [showPassword , setShowPassword] = useToggle(false);
return (
    <div className='auth_input_parent mb-3'>
            <span className="auth_input_icon">
                <LockIcon />
            </span>
            <input
                placeholder={placeholder}
                type={showPassword ? "text" : "password"}
                className='auth_text_input form-control'
            />
            <span className="auth_input_eye" onClick={setShowPassword} >
                {showPassword ? <EyeIcon color="black" /> : <EyeOff color="black"/>}
            </span>
    </div>   
)
}
