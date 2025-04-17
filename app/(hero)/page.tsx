import { Metadata } from "next";
import Hero from "../../components/hero"
import HomeImg from "../../public/1.jpeg";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to my Home'
}

export default function Page() {
  return (
    <Hero imgUrl={HomeImg} altText="home" content="Welcome to my Home" />
  )
}