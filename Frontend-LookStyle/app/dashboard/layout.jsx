import DashboardNav from "@/components/Dashboard/Nav"

export default function LayoutDash({ children }) {
    return (
        <div className="w-full h-full flex">
            <div className="w-1/4 bg-gray-200 h-full m-5 ">
                <DashboardNav/>
            </div>
            <div className="w-3/4 bg-gray-300 h-auto m-5 rounded-xl">
                {/* Aquí se mostrará el contenido */}
                {children}
            </div>
        </div>
    )
}
