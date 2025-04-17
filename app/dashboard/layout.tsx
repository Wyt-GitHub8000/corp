'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { PropsWithChildren } from "react";

interface DashboardLayoutProps extends PropsWithChildren {

}

const links = [
    { name: 'About', href: '/dashboard/about' },
    { name: 'Settings', href: '/dashboard/settings' },
]

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [count, setCount] = useState<number>(0);
    const pathname = usePathname();
    return (
        <>
            <div>
                {
                    links.map(link => {
                        const isActive = pathname === link.href;
                        return (
                            <Link className={`${isActive ? 'text-blue-300' : 'text-black'} m-[3px]`} href={link.href} key={link.name}>{link.name}</Link>
                        )
                    })
                }
            </div>
            <h1>DashboardLayout：{count}</h1>
            <button className="border p-[2px]" onClick={() => setCount(count + 1)}>Increment</button>
            <div className="border p-[10px] mt-[10px]">
                {children}
            </div>

        </>
    )
}