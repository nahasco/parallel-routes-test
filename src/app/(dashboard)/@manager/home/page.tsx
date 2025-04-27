import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Manager Home",
}

function ManagerHome() {
    console.log("Manager Page Rendered")

    return (
        <div className="h-screen w-full grid place-items-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <Link href="/" className="text-blue-500 hover:underline hover:opacity-75">
                    Select role
                </Link>
                ManagerHome
            </div>
        </div>
    )
}

export default ManagerHome
