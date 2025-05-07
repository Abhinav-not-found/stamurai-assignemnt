import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <p className="capitalize">landing page</p>
        <p>goto <Link href={'/login'} className="underline">Login</Link></p>
      </div>
    </div>
  );
}
