import AdminSidebar from "@/components/AdminSidebar"
import Nav from "@/components/Nav"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return   (
  <div className=" w-full h-screen flex ">
  <section>
  <Nav / >
<div className="flex w-full h-screen">
<div>
            <AdminSidebar />
          </div>
  {children}
  </div>

  </section>
  </div>
  )
}