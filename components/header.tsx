'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkList = [
    {
        href: '/performance',
        text: 'Performance'
    },
    {
        href: '/reliability',
        text: 'Reliability'
    },
    {
        href: '/scale',
        text: 'Scale'
    }
]
/* 前面完成的404功能还存在一定的问题：因为404组件本质也是在layout组件中children占位，那么header部分就会显示出来，我们的解决思路就是通过 路径判断非规定的路径就不显示header
    那么就有人问了，为啥不直接在layout组件中判断呢，因为layout组件规定时服务端组件，而获取页面路径的 usePathname只能在客户端组件中使用（试过了在layout组件中加入 use client next会直接报错），所以只能在这里判断
 */

const whiteList = ['/', '/performance', '/reliability', '/scale']

export default function Header() {
    const pathname = usePathname()
    // if (!whiteList.includes(pathname)) {
    //     return null
    // }
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8">
                <Link className="text-3xl font-bold" href="/">Home</Link>
                <div className="text-xl space-x-4 text-center">
                    {
                        linkList.map((link, index) => {
                            return (
                                <Link key={index} className={pathname === link.href ? 'text-purple-500' : ''} href={link.href}>{link.text}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}