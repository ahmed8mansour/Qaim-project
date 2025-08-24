import Button from '@mui/material/Button';

export default function AuthLayout({ children , title , pretitle , buttonText }) {

    return (

        <div className="auth_layout main_font">

                <div className="auth_content row h-100">

                    {/* less than 992px hide this col */}
                    <div className="col-lg-7 col-12 h-100 login_left_col d-none d-lg-block">

                        <div className="auth_left">
                            <div className="auth_left_top">
                            <Button className='main_font auth_back_btn' startIcon={<i className="fa-solid fa-arrow-left"></i>} variant="contained" >عودة</Button>
                            </div>
                            <div className="auth_left_center" dir='rtl'>
                                <h1 className='auth_title mb-4 '> {title} </h1>
                                <p className='auth_subtitle mb-4 '> {pretitle} </p>
                                <Button className='main_font auth_center_btn'   sx={{
                                        '& .MuiButton-startIcon': {
                                            marginLeft: '10px', 
                                        },
                                    }} startIcon={<i className="fa-solid fa-arrow-right"></i>} variant="contained">
                                    
                                    {buttonText}
                                
                                </Button>

                            </div>
                        </div>
                    </div>



                    <div className="col-lg-5 col-12 login_right_col">

                        <div className="auth_right ">
                            {/* more than 992 hide this element */}
                            <Button className='main_font auth_back_btn d-inline-flex d-lg-none mb-5' startIcon={<i className="fa-solid fa-arrow-left"></i>} variant="contained" >عودة</Button>

                                {children}
                        </div>
                    </div>

            </div>
        </div>
    )
}
