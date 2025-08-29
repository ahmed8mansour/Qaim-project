export default function TextInput({placeholder , icon}) {
    
return (

    <div className='auth_input_parent '>
            <span className="auth_input_icon">
                {icon}
            </span>
            <input
                placeholder={placeholder}
                type="text"
                className='auth_text_input form-control mb-3'
            />
    </div>  
    )
}
