import { Metadata } from "next";
import Hero from "../../../components/hero"
import PerformanceImg from "../../../public/2.jpeg";

export const metadata: Metadata = {
    title: 'Performance',
    description: 'Welcome to my performance'
}
export default function Performance() {
    return (
        <Hero imgUrl={PerformanceImg} altText="performance" content="Performance~~~" />
    )
}