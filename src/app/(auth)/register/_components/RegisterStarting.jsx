import { CircleUserRound} from "lucide-react";

export default function RegisterStarting() {
  return (
            <div className="register_profile_area d-flex flex-column justify-content-center align-items-center" dir="rtl">
                <div className="profile_icon d-flex justify-content-center align-items-center">
                    <CircleUserRound width={55} height={60} color="white" />
                </div>
                <h1 className="register_title ">إنشاء حساب جديد</h1>
            </div>
  )
}
