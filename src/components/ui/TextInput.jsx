export default function TextInput({placeholder , icon , spanStyle}) {
    
return (

    <div className='auth_input_parent mb-3 '>
            <span className="auth_input_icon" style={spanStyle}>
                {icon}
            </span>
            <input
                placeholder={placeholder}
                type="text"
                className='auth_text_input form-control '
            />
    </div>  
    )
}
