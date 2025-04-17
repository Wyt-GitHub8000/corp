'use client'
import { PropsWithChildren, useState } from "react";

export default function Template({ children }: PropsWithChildren) {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <h1>Template：{count}</h1>
            <button className="border p-[2px]" onClick={() => { setCount(count + 1) }}>Increment</button>
            {children}
        </>
    )
}