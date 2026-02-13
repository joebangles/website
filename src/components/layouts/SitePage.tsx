import SiteFooter from '../SiteFooter/SiteFooter.tsx';
import SiteHeader from '../SiteHeader/SiteHeader.tsx'
import { Outlet } from "react-router";

function HeaderPage() {
    return (
        <>
                <SiteHeader />
                <div className="subwidth-wrapper">
                    <Outlet />
                </div>
                <SiteFooter />
        </>
    )
}

export default HeaderPage