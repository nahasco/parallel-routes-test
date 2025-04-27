"use client"

import Cookie from "js-cookie"
import { useRouter } from "next/navigation"

export function SelectRole() {
    const router = useRouter()
    function setRole(role: string) {
        Cookie.set("role", role)
        router.push("/home")
    }

    return (
        <div className="flex gap-6">
            <button
                onClick={() => setRole("manager")}
                className="p-3 rounded-lg hover:opacity-75 transition-all bg-white text-black"
            >
                Manager
            </button>
            <button
                onClick={() => setRole("teacher")}
                className="p-3 rounded-lg hover:opacity-75 transition-all bg-white text-black"
            >
                Teacher
            </button>
        </div>
    )
}
