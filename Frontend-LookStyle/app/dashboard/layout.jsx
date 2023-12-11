import DashboardNav from "@/components/Dashboard/Nav"

export default function LayoutDash({ children }) {
    return (
        <div className="w-full h-full flex gap-10">
            <div className="w-1/4 bg-gray-200 h-screen m-10 ">
                <DashboardNav/>
            </div>
            <div className="w-3/4 bg-gray-300 h-screen m-10 ">
                {/* Aquí se mostrará el contenido */}
                {children}
            </div>
        </div>
    )
}
