import Image from "next/image"
import Link from "next/link"
export default function ProfileStatusCard({src , title , route}){
    return(
        <Link href={route} className="text-decoration-none">
            <div className="profile_status_card d-flex justify-content-between align-items-center w-100 p-3 py-sm-1 px-sm-5  mb-4" dir="ltr">
                <Image src={src} alt="Profile Status svg" width={130} height={115} />
                <h2 className="profile_status_title">{title}</h2>
            </div>
        </Link>
    )
}