import Image from "next/image"
export default function NavBar() {

    return(
        <div className="navbar_container" dir="rtl">
            <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <Image src="/images/QAIM-logo 1.png" alt="Qaim website" width={190} height={112}/>
                        </a>

                        <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"></span>
                            <span className="toggler-icon middle-bar"></span>
                            <span className="toggler-icon bottom-bar"></span>
                        </button>


                        <div className="collapse navbar-collapse"  id="navbarNav">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">الرئيسية</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">من نحن</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">تواصل معنا</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">المساعدة</a>
                            </li>
                        </ul>
                
                
                        <form className="d-flex nav_form" >
                            <button type="button" className="btn btn-primary gold_button">
                                <i className="fa-solid fa-user"></i> تسجيل دخول 
                            </button>
                        </form>
                
                </div>
            </div>
            </nav>
        </div>

    )
}