/* CSR，英文全称“Client-side Rendering”，中文翻译“客户端渲染”。顾名思义，渲染工作主要在客户端执行。

像我们传统使用 React 的方式，就是客户端渲染。浏览器会先下载一个非常小的 HTML 文件和所需的 JavaScript 文件。在 JavaScript 中执行发送请求、获取数据、更新 DOM 和渲染页面等操作。

这样做最大的问题就是不够快。（SEO 问题是其次，现在的爬虫已经普遍能够支持 CSR 渲染的页面）

在下载、解析、执行 JavaScript以及请求数据没有返回前，页面不会完全呈现。 */

import { useState, useEffect } from "react";

export default function CsrPage() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            const result = await response.json()
            setData(result)
        }

        fetchData().catch(e => {
            console.error('An error occurred while fetching the data: ', e)
        })
    }, [])

    return <p>{data ? `Your data: ${JSON.stringify(data)} ` : `Loading....`}</p>
}