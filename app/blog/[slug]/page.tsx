
interface BlogProps {
    params: {
        slug: string,
        [key: string]: any
    }
}

export default function Page({ params }: BlogProps) {
    return <div>My Post: {params.slug}</div>
}