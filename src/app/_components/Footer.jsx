import Image from "next/image"
export default function Footer() {
  return (
    <div className="footer_section">
        <div className="footer_container container main_font " dir="rtl">
            {/* <Image src="/images/5-stars.png" alt="تقيم التطبيق على المتاجر" width={392} height={46} /> */}

            <div className="footer_content d-flex flex-column justify-content-center align-items-center row-gap-5 ">
                <h2 className="footer_title"> يمكنك تحميل تطبيق <span>قيم - QAIM</span>  الان !</h2>
                <div className="footer_stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>

                    {/* <Image src="/images/5-stars.png" alt="تقيم التطبيق على المتاجر" width={392} height={46} /> */}
                </div>
                <div className="footer_text">
                    أكثر من 20,000 عملية تنزيل حتي الان
                </div>

                <div className="footer_images d-flex justify-content-lg-start justify-content-center align-items-center w-100 px-5 column-gap-2" >

                    <Image src="/images/googlePlay.png" alt="تحميل التطبيق من جوجل بلاي" width={177} height={55} className="footer_image" />
                    <Image src="/images/appStore.png" alt="تحميل التطبيق من  اب ستور" width={177} height={55} className="footer_image" />

                </div>

            </div>
        </div>
    </div>
  )
}
