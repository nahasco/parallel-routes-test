import { cookies } from "next/headers"

interface AppLayoutProps {
    manager: React.ReactNode;
    teacher: React.ReactNode;
}

export default async function AppLayout({ manager, teacher }: AppLayoutProps) {
    const cookieStore = await cookies()
    const role = cookieStore.get("role")?.value

    if (role == "manager") {
        return <main>{manager}</main>
    }

    if (role == "teacher") {
        return <main>{teacher}</main>
    }
}
