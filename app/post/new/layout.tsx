import NavAdmin from "@/components/Admin/NavAdmin";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type AdminPostLayout = {
    children: React.ReactNode
}


export default function AdminPostLayout({ children }: Readonly<AdminPostLayout>){
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    useEffect(() =>{
        setIsOpen(false)
    }, [pathname])
    return (
        <>
            <NavAdmin></NavAdmin>
            {children}
        </>
    );
}
