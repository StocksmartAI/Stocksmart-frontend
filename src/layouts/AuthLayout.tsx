import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <Outlet></Outlet>
        </div>

    )
}
export default AuthLayout

