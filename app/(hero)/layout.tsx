import type { Metadata } from "next";

import Header from "../../components/header";

import "../globals.css";

/* 回想一下我们之前写的404页面优化：存在这样一个问题，当我页面越来越多，那不是得往路径白名单中加好多路径，太麻烦了。这节我们通过 创建路由组的方式来优化404页面，就避免出现这个问题 */

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
