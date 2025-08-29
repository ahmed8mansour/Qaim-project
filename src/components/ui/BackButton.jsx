"use client"
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function BackButton({className}) {
    const router = useRouter();
    return (
        <Button className={`main_font auth_back_btn mb-5 ${className}`} startIcon={<i className="fa-solid fa-arrow-left"></i>} variant="contained" onClick={() => router.back()} >عودة</Button>
    )
}
