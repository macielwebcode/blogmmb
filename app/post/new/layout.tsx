import NavAdmin from "@/components/Admin/NavAdmin";

type AdminPostLayout = {
    children: React.ReactNode
}


export default function AdminPostLayout({ children }: Readonly<AdminPostLayout>){
  return (
    <>
        <NavAdmin></NavAdmin>
        {children}
    </>
  );
}
