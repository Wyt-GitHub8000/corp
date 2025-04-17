import { NextResponse, NextRequest } from 'next/server'

const allowOrigins = ['https://acme.com', 'https://my-app.rog']
const corsOptions = {
    "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS',
    "Access-Control-Allow-Headers": 'Content-Type, Authorization'
}

export function middleware(request: NextRequest) {
    /* 读取和设置cookie */
    // 1.获取cookie
    let cookie = request.cookies.get("nextjs") // 假设传入的请求 header 里 "Cookie:nextjs=fast"
    console.log(cookie); // { name: 'nextjs', value: 'fast', Path: '/' }
    const allCookie = request.cookies.getAll()
    console.log(allCookie);
    // 2.判断存在
    request.cookies.has("nextjs") // 判断是否存在某个cookie值
    request.cookies.delete("nextjs")
    // 3.设置cookie
    const response = NextResponse.next() // node中间件里面学习过，如果走下一个逻辑就调用next放行，如果不走就不需要返回 next()
    response.cookies.set('vercel', 'fast')
    response.cookies.set({
        name: 'vercel',
        value: 'fast',
        path: '/'
    })
    cookie = response.cookies.get('vercel')

    /* 读取和设置请求头信息 */
    // 1.clone请求头
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-hello', 'hello')
   // 你也可以在 NextResponse.rewrite 中设置请求标头
    const response1 = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })

    // 设置相应头
    response1.headers.set('x-hello', 'hello')

    /* 设置允许跨域 */
    const origin = request.headers.get('origin')??''
    const isAllowOrigin = allowOrigins.includes(origin)

    const isPreflight = request.method === 'OPTIONS'

    if(isPreflight) {
        const preflightHeaders = {
            ...(isAllowOrigin && { 'Access-Control-Allow-Origin': origin }),
            ...corsOptions
        }
        return NextResponse.json({}, { headers: preflightHeaders })
    }

    const response3 = NextResponse.next()
    if(isAllowOrigin) {
        response.headers.set('Access-Control-Allow-Origin', origin)
    }
    Object.entries(corsOptions).forEach(([key, value])=>{
        response.headers.set(key, value)
    })

    return response

    //return NextResponse.redirect(new URL("/home", request.url))
}

// 路径匹配， path-to-regexp语法
export const config = {
    matcher: '/about/:path*'
}