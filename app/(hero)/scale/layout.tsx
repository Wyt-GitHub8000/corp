import { Metadata } from "next"

/* 测试当Layout和page中同时都有 metadata数据时，优先使用page中的 */
export const metadata: Metadata = {
    title: 'ScaleLayout'
}

export default function ScaleLayout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}