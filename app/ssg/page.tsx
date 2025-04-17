/* SSG，英文全称“Static Site Generation”，中文翻译“静态站点生成”。

SSG 会在构建阶段，就将页面编译为静态的 HTML 文件。

比如打开一篇博客文章页面，既然所有人看到的内容都是一样的，没有必要在用户请求页面的时候，服务端再请求接口。干脆先获取数据，提前编译成 HTML 文件，等用户访问的时候，直接返回 HTML 文件。这样速度会更快。再配上 CDN 缓存，速度就更快了。

所以能用 SSG 就用 SSG。“在用户访问之前是否能预渲染出来？”如果能，就用 SSG。 */

export default function SsgPage({ data }) {
    return <p>{JSON.stringify(data)}</p>
}

export async function getStaticProps() {
    const resp = await fetch(`http://localhost:3000/api`)
    const data = await resp.json()

    return { props: { data } }
}