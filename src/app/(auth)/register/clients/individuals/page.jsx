import TextInput from "@/components/ui/TextInput";
import PasswordInput from "@/components/ui/PasswordInput";
import { Mail , Phone , MapPin} from "lucide-react";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import Form from "next/form";
import LoginButton from "@/components/ui/LoginButton";
import RegisterStarting from "../../_components/RegisterStarting";


export default function Individuals() {
    return (
      <div className="register_individuals_content h-100" >
            <RegisterStarting/>

            <Form className="d-flex flex-column align-items-center mt-3" dir="rtl" >
                <TextInput icon={<i class="fa-solid fa-user"></i>}  placeholder={"اسم المستخدم"}/>
                <TextInput placeholder={"البريد الالكتروني"} icon={<Mail />} />
                <TextInput icon={<Phone/>}  placeholder={" رقم الجوال"}/>
                <TextInput icon={<MapPin/>}  placeholder={" اكتب المدينة "}/>
                <PasswordInput placeholder=" كلمة المرور "/>
                <PasswordInput placeholder=" تأكيد كلمة المرور "/>
                <div className="d-flex align-items-center mb-3 " style={{width:"400px" , maxWidth:"100%"}}>
                    <Checkbox
                        sx={{
                            color: "#C29062",
                            '&.Mui-checked': {
                                color: "#C29062",
                            },
                            '& .MuiSvgIcon-root': { fontSize: 32 },
                        }}
                    />
                    <label className="checkbox_label" >
                        أوافق على الشروط والأحكام
                    </label>
                </div>

                <LoginButton/>


                

            </Form>
      </div>
    )
}
