/* ISR，英文全称“Incremental Static Regeneration”，中文翻译“增量静态再生”。
还是打开一篇博客文章页面，博客的主体内容也许是不变的，但像比如点赞、收藏这些数据总是在变化的吧。使用 SSG 编译成 HTML 文件后，这些数据就无法准确获取了，那你可能就退而求其次改为 SSR 或者 CSR 了。
考虑到这种情况，Next.js 提出了 ISR。当用户访问了这个页面，第一次依然是老的 HTML 内容，但是 Next.js 同时静态编译成新的 HTML 文件，当你第二次访问或者其他用户访问的时候，就会变成新的 HTML 内容了。
使用的方式很简单。你只用在 getStaticProps 中添加一个 revalidate即可，表示当发生请求的时候，至少间隔多少秒才更新页面*/

export default function SsrPage({ data }) {
    return <p>{JSON.stringify(data)}</p>
}

export async function getServerSideProps() {
    const resp = await fetch(`http://localhost:3000/api`)
    const data = await resp.json()

    return { props: { data }, revalidate: 10 }
}