import PartnerImagesLogic from "./Component inside sections/PartnerImagesLogic"
export default function OurPartners() {
  return (
    <div className="partners_section">
        <div className="parnters_container container main_font">
            <div className="partner_top text-center" dir="rtl">
                <h2 className="partner_title ">شركاؤنا بالنجاح</h2>
            </div>
            <div className="partner_bottom">
              <PartnerImagesLogic/>
            </div>

        </div>
    </div>
  )
}

