import DashboardNav from "@/components/Dashboard/Nav"
export default function LayoutDash({ children }) {
    return (
        <>
            <DashboardNav />
            <section className="bg-graycolor-gc h-screen w-screen ml-[273px] pl-7">
                {children}
            </section>
        </>
    )
}