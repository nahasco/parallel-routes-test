import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Teacher Home",
}

function TeacherHome() {
    console.log("Teacher Page Rendered")

    return (
        <div className="h-screen w-full grid place-items-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <Link href="/" className="text-blue-500 hover:underline hover:opacity-75">
                    Select role
                </Link>
                TeacherHome
            </div>
        </div>
    )
}

export default TeacherHome
