import { Metadata } from "next";
import Hero from "../../../components/hero"
import ScaleImg from "../../../public/4.jpeg";

export const metadata: Metadata = {
    title: 'Scale',
    description: 'Welcome to my scale'
}

export default function Scale() {
    return (
        <Hero imgUrl={ScaleImg} altText="scale" content="I am Scale" />
    )
}