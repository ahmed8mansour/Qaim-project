import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProfileStatusCard from "./_components/ProfileStatusCard";
// register/clients/individuals
// register/clients/companies
// register/inspectors
// register/valuation-companies

export default function Register() {
    return (

            <div className="register_content h-100" dir="rtl">
                <div className="d-flex flex-column justify-content-between align-items-center">
                    <div className="register_profile_area d-flex flex-column justify-content-center align-items-center">
                        <div className="profile_icon d-flex justify-content-center align-items-center">
                            <CircleUserRound width={55} height={60} color="white" />
                        </div>
                        <h1 className="register_title mt-3">قم بإختيار حالة حسابك !</h1>
                    </div>
                    <div className="profile_container  mt-5">
                        <ProfileStatusCard src={"/images/clients.png"} title="عميل" route="/register/clients" />
                        <ProfileStatusCard src={"/images/valuation-companies.png"} title="شركة التقييم" route="/register/valuation-companies" />
                        <ProfileStatusCard src={"/images/inspectors.png"} title="معاين" route="/register/inspectors" />
                    </div>
                    
                </div>
            </div>
    )
}
