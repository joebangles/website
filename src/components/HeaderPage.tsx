import SiteHeader from './SiteHeader.tsx'
import { Outlet } from "react-router";

function HeaderPage() {
    return (
        <>
            <SiteHeader />
            <div className="subwidth-wrapper">
                <Outlet />
            </div>
        </>
    )
}

export default HeaderPage