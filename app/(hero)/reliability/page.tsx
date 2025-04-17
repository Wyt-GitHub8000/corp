import { Metadata } from "next";
import Hero from "../../../components/hero"
import ReliabilityImg from "../../../public/3.jpeg";

export const metadata: Metadata = {
    title: 'Reliability',
    description: 'Welcome to my reliability'
}
export default function Reliability() {
    return (
        <Hero imgUrl={ReliabilityImg} altText="reliability" content="I am Reliability" />
    )
}