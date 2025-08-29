"use client";
import { LockIcon , EyeIcon , EyeOff } from "lucide-react";
import React from "react";
import { useToggle } from "react-use";
export default function PasswordInput({placeholder , icon}) {
    const [showPassword , setShowPassword] = useToggle(false);
return (
    <div className='auth_input_parent '>
            <span className="auth_input_icon">
                <LockIcon/>
            </span>
            <input
                placeholder="كلمة المرور"
                type={showPassword ? "text" : "password"}
                className='auth_text_input form-control mb-3'
            />
            <span className="auth_input_eye" onClick={setShowPassword} >
                {showPassword ? <EyeOff /> : <EyeIcon />}
            </span>
    </div>   
)
}
