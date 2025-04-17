import React from "react";

/* 如何设置网站icon图标，参照官方文档推荐的方式：https://nextjs.org/docs/app/getting-started/metadata-and-og-images#favicons
    有的时候网站icon图标并没有出来，这是由于网站缓存导致的，此时可以F12打开开发者工具，然后鼠标右键点击浏览器的刷新按钮，选择清空缓存并重新加载
 */

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>{children}</div>
    )
}