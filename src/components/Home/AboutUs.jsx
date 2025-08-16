import { MessageSquareText } from "lucide-react"
export default function AboutUs() {
    return (
        <div className="about_us_section my_section main_font">
            <div className="about_container container">
                <div className="about_top text-center" dir="rtl">
                    <h1 className="about_title">  ما هي منصة <span>قـيم  - QAIM ؟ </span> </h1>
                    <p className="about_pretitle">نتيح لطالبي خدمة التقييم من الوصول الي جميع شركات التقييم الموجودة في منطقته بالإضافة الي تقدم الشركات او مكاتب التقييم عرض السعر لتنفيذ هذه الخدمة وبالتالي يتيح لكم اختيار افضل سعر واكثر كفاءة. </p>
                </div>
                <div className="about_bottom text-center row gx-3 gy-5 g-md-5  row-cols-xl-3 row-cols-md-2 row-cols-1 mt-5">
                    <div className="col">
                        <div className="about_card d-flex flex-column justify-content-between align-items-center row-gap-5 about_card_message">
                            <div className="about_card_icon d-flex justify-content-center align-items-center">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 60H60V50H20V60ZM20 45H80V35H20V45ZM20 30H80V20H20V30ZM0 100V10C0 7.25 0.98 4.895 2.94 2.935C4.89667 0.978333 7.25 0 10 0H90C92.75 0 95.105 0.978333 97.065 2.935C99.0217 4.895 100 7.25 100 10V70C100 72.75 99.0217 75.105 97.065 77.065C95.105 79.0217 92.75 80 90 80H20L0 100Z" fill="#D1E8E2"/>
                                </svg>
                            </div>
                            <div className="about_card_text mb-auto">
                                <h2 dir="rtl" className="about_card_title">سهولة التواصل</h2>
                                <p dir="rtl" className="about_card_pretitle mt-4">يتيح التطبيق للشركات او المكاتب العقارية التواصل بين اعضاء الفريق لسرعة انجاز العمل.</p>
                            

                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="about_card d-flex flex-column justify-content-between align-items-center row-gap-5 about_card_location">
                            <div className="about_card_icon d-flex justify-content-center align-items-center">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_24_1226" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
                                    <rect width="120" height="120" fill="#D1E8E2"/>
                                    </mask>
                                    <g mask="url(#mask0_24_1226)">
                                    <path d="M60 95C48.25 86.3333 39.4783 77.9167 33.685 69.75C27.895 61.5833 25 53.5833 25 45.75C25 39.8333 26.0633 34.645 28.19 30.185C30.3133 25.7283 33.0417 22 36.375 19C39.7083 16 43.4583 13.75 47.625 12.25C51.7917 10.75 55.9167 10 60 10C64.0833 10 68.2083 10.75 72.375 12.25C76.5417 13.75 80.2917 16 83.625 19C86.9583 22 89.6883 25.7283 91.815 30.185C93.9383 34.645 95 39.8333 95 45.75C95 53.5833 92.1033 61.5833 86.31 69.75C80.52 77.9167 71.75 86.3333 60 95ZM60 55C62.75 55 65.105 54.02 67.065 52.06C69.0217 50.1033 70 47.75 70 45C70 42.25 69.0217 39.895 67.065 37.935C65.105 35.9783 62.75 35 60 35C57.25 35 54.8967 35.9783 52.94 37.935C50.98 39.895 50 42.25 50 45C50 47.75 50.98 50.1033 52.94 52.06C54.8967 54.02 57.25 55 60 55ZM25 110V100H95V110H25Z" fill="#D1E8E2"/>
                                    </g>
                                </svg>

                            </div>
                            <div className="about_card_text mb-auto">
                                <h2 dir="rtl" className="about_card_title">سهولة الوصول</h2>
                                <p dir="rtl" className="about_card_pretitle mt-4"> سهولة الوصول الي جميع شركات التقييم الموجودة في منطقته بالإضافة الي </p>
                            

                            </div>
                        </div>

                    </div>
                    <div className="col">

                        <div className="about_card d-flex flex-column justify-content-between align-items-center row-gap-5 about_card_message">
                            <div className="about_card_icon d-flex justify-content-center align-items-center">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_46_1164" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
                                <rect width="120" height="120" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_46_1164)">
                                <path d="M77.75 102L60.5 84.75L67.5 77.75L77.75 88L103 62.75L110 69.75L77.75 102ZM50 60C44.5 60 39.7917 58.0417 35.875 54.125C31.9583 50.2083 30 45.5 30 40C30 34.5 31.9583 29.7917 35.875 25.875C39.7917 21.9583 44.5 20 50 20C55.5 20 60.2083 21.9583 64.125 25.875C68.0417 29.7917 70 34.5 70 40C70 45.5 68.0417 50.2083 64.125 54.125C60.2083 58.0417 55.5 60 50 60ZM64.25 66.5L46 84.75L61.25 100H10V86C10 83.25 10.7083 80.6667 12.125 78.25C13.5417 75.8333 15.5 74 18 72.75C22.25 70.5833 27.0417 68.75 32.375 67.25C37.7083 65.75 43.5833 65 50 65C52.5 65 54.9383 65.125 57.315 65.375C59.6883 65.625 62 66 64.25 66.5Z" fill="#D1E8E2"/>
                                </g>
                                </svg>

                            </div>
                            <div className="about_card_text mb-auto">
                                <h2 dir="rtl" className="about_card_title"> انجاز العمل بدقة</h2>
                                <p dir="rtl" className="about_card_pretitle mt-4"> يمكن ايضا اشتراك المعاينين العقارين المعتمدين حسب المتطلبات المهنية المتبعة في ذلك دوليًا ولدى الهيئة السعودية وبذلك تكتمل منظومة التقييم </p>
                            

                            </div>
                        </div>
                        

                    </div>

                </div>
            </div>
        
        </div>
    )
}
