import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="flex gap-4 justify-center">
        <Link href="/account">Account</Link>
        <Link href="/adm/accounts">adm/accounts</Link>
        <Link href="/adm/pending">adm/pending</Link>
        <Link href="/adm/user_transactions">adm/user_transactions</Link>
        <Link href="/dashboard">dashboard</Link>
        <Link href="/market">market</Link>
        <Link href="/account">Account</Link>
        <Link href="/onboarding">onboarding</Link>
        <Link href="/portfolio">portfolio</Link>
        <Link href="/transactions">transactions</Link>
        <Link href="/wallet">wallet</Link>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
