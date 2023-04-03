import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href={"/"}>
          <h1>Galih Arizza Family's Blog</h1>
        </Link>
        <p>Welcome to Galih Family Storytales !</p>
      </div>
    </header>
  );
}
