import Link from "next/link"


export default function NavBar() {
  return (
    <>
      <div className="fixed left-0 top-0 h-full bg-base-100 text-black w-80 flex flex-col justify-between shadow-lg">
        <div className="py-4">
          {/* Sidebar content */}
          <ul className="space-y-2">
            <li>
             
            </li>

            <li>
              <Link href="/dashboard">
                <span className="block px-8 py-2 hover:bg-secondary">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/market">
                <span className="block px-8 py-2 hover:bg-secondary">Market</span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <span className="block px-8 py-2 hover:bg-secondary">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link href="/transactions">
                <span className="block px-8 py-2 hover:bg-secondary">Transactions</span>
              </Link>
            </li>
            <li>
              <Link href="/wallet">
                <span className="block px-8 py-2 hover:bg-secondary">Wallet</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <span className="block px-8 py-2 hover:bg-secondary">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
    )
  }