import TextInput from "@/components/ui/TextInput";
import PasswordInput from "@/components/ui/PasswordInput";
import { Mail , Phone , MapPin, Wallet ,IdCard} from "lucide-react";
import Checkbox from '@mui/material/Checkbox';
import { Button } from "@mui/material";
import Form from "next/form";
import LoginButton from "@/components/ui/LoginButton";
import RegisterStarting from "../_components/RegisterStarting";
// make the form to be client side 

export default function Individuals() {

    // const [selectedFile, setSelectedFile] = React.useState(null);   // الصورة نفسها
    // const inputRef = React.useRef(null);

    // const handleButtonClick = () => {
    //     inputRef.current.click(); // لما تضغط عالصورة شغل الانبت الخفي

    // };
    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setSelectedFile(file);

    // };    


    return (
      <div className="register_companies_content h-100" >
            <RegisterStarting/>

            <Form className="d-flex flex-column align-items-center mt-3" dir="rtl" >
                <TextInput icon={<i class="fa-solid fa-user"></i>}  placeholder={"اسم المستخدم"}/>
                <TextInput placeholder={"البريد الالكتروني"} icon={<Mail />} />
                <TextInput icon={<Phone/>}  placeholder={" رقم الجوال"}/>
                <TextInput icon={<Wallet />}  placeholder={" رسوم المعاينة"}/>
                <PasswordInput placeholder=" كلمة المرور "/>
                <PasswordInput placeholder=" تأكيد كلمة المرور "/>
                <TextInput icon={<MapPin/>}  placeholder={" اكتب المدينة "}/>
                <TextInput icon={<MapPin/>}  placeholder={" اكتب المنطقة "}/>
                <TextInput icon={<IdCard />}  placeholder={" رقم الهوية الوطنية "}/>





                <input
                    type="file"
                    // ref={inputRef}
                    accept=".pdf"
                    style={{ display: 'none' }}
                    // onChange={handleFileChange}
                />

                {/* <Button variant="contained" className="add_file_btn" onClick={handleButtonClick} endIcon={<i className="fa-solid fa-plus"></i>}>اضافة تفويض</Button> */}
                <Button variant="contained" className="add_file_btn login_btn mb-3" endIcon={<i className="fa-solid fa-plus me-3"></i>}>اضافة شهادة اعتماد</Button>

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
