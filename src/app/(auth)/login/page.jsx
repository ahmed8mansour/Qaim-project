import TextInput from "@/components/ui/TextInput";
import Form from "next/form";
import Image from "next/image";
import { Mail } from "lucide-react"
import PasswordInput from "@/components/ui/PasswordInput";
import LoginButton from "@/components/ui/LoginButton";

import Link from "next/link";
export default function Login() {
  return (

        <div className="login_content h-100" dir="rtl">
          <div className="d-flex flex-column justify-content-between align-items-center">
            <Image src="/images/authLoginImage.png" alt="Login Image" width={340} height={340} />
            <div className="login_text text-end w-100 mt-5">
              <h1 className="login_title">اهلاً بــك! </h1>
              <h2 className="login_subtitle mt-3">مرحباً بعودتك مجدداً</h2>
            </div>
            <Form className="mt-5 w-100 d-flex flex-column align-items-center login_form" >
              <TextInput placeholder={"البريد الالكتروني"} icon={<Mail />} />
              <PasswordInput placeholder={"كلمة المرور"}/>
              <LoginButton  />
              <Link className="forget_password mt-4 text-decoration-none" href={""}>هل نسيت كلمة المرور ؟</Link>
              {/* more than 992 hide this element */}
              <p className="register_link mt-4 d-lg-none d-block " >ليس لديك حساب؟ <Link href={"/register"} className="text-decoration-none" style={{color:"var(--mainColor)"}}> أنشئ حساب جديد</Link></p>
            </Form>
          </div>
        </div>
  )
}
