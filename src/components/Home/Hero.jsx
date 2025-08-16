import MySwiperComponent from "@/components/Home/sections/imagesLogic";
export default function Hero() {
  return (
          <div className="home_content container">
            <div className="row gap-lg-0 gap-3">
              <div className="col-12 col-lg-6">
                <div className="home_content_left d-flex row-gap-3 flex-column justify-content-center align-items-end h-100 ">
                    <h1 className="home_title">  QAIM - منصة قيم </h1>
                    <h2 className="home_title_prev">اكبر منصة بالشرق الاوسط لحلول إدارة الاملاك العقاري</h2>
                    <p className="home_title_para"> 
                      تقنيات_عقارية تمكن المكاتب والشركات العقارية  
                      من اتمة عمليات الشراء للوحدات والمرافق العقارية .
                      تتوافق وترتبط بالخدمات الحكومية ومزودة
                      بأنظمة محاسبية ألية.
                      
                      </p>
                    <button className="gold_button btn" type="button">
                      سجل الأن <i className="fa-solid fa-angle-right"></i> 
                    </button>
                </div>

              </div>
              <div className="col-12 col-lg-6">

    <MySwiperComponent/>
              </div>
            </div>
          </div>
  )
}
