import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          className="mx-auto"
          alt="Logo"
        />
        <Link href={"/"}>
          <h1 className="text-3xl text-white font-bold">
            Galih Arizza Family's Blog
          </h1>
        </Link>
        <p className="text-slate-300">Welcome to Galih Family Storytales !</p>
      </div>
    </header>
  );
}
