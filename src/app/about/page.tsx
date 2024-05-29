import Link from "next/link";

export const metadata = {
  title: 'About STRA Company'
}

export default function About() {
  return (
    <>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </>
  )
}
