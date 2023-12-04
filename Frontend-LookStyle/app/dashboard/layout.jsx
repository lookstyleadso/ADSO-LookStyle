<<<<<<< HEAD
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
=======

import NavDashboard from '@/components/Dashboard/Nav'

const Layout = ({ children }) => {
    return (
        <div>
            <NavDashboard />
            <main >
                {children}
            </main>
        </div>
    );
};

export default Layout; 
>>>>>>> f2274ca52b237c2c2f9bb5ff4c085722c489e8f0
