
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