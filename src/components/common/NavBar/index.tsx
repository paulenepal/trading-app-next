import HighlightText from "../Texts/HighlightText";
import Link from "next/link";
import Icon from "../icon";

import { MAIN_ROUTES } from '@/utils/constants/routes';


export default function NavBar() {
  return (
    <>
      <div className="fixed left-0 top-0 h-full bg-base-100 text-black w-80 flex flex-col justify-between shadow-lg">
        <div className="py-4">
          {/* Sidebar content */}
          <ul className="space-y-2">
            <li className="mb-4">
              <HighlightText>
                <span className='px-4 ml-4 text-2xl'>t<span className='text-primary'>rails</span>.io</span>
              </HighlightText>
            </li>

            <li className="mb-4 px-8">
              <Link href={MAIN_ROUTES.ACCOUNT}>
                <HighlightText>
                  <div className="flex flex-row">
                    <Icon iconName="user-fill" className="text-purple-400 text-xl" ></Icon>
                    <span className="block px-2 py-2 cursor-pointer">John Doe</span>
                  </div>
                </HighlightText>
              </Link>
            </li>
            
            <li>
              <Link href={MAIN_ROUTES.DASHBOARD}>
                <span className="block px-12 py-2 hover:bg-secondary">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href={MAIN_ROUTES.MARKET}>
                <span className="block px-12 py-2 hover:bg-secondary">Market</span>
              </Link>
            </li>
            <li>
              <Link href={MAIN_ROUTES.PORTFOLIO}>
                <span className="block px-12 py-2 hover:bg-secondary">Portfolio</span>
              </Link>
            </li>
            <li>
              <Link href={MAIN_ROUTES.TRANSACTIONS}>
                <span className="block px-12 py-2 hover:bg-secondary">Transactions</span>
              </Link>
            </li>
            <li>
              <Link href={MAIN_ROUTES.WALLET}>
                <span className="block px-12 py-2 hover:bg-secondary">Wallet</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-4">
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <span className="block px-12 py-2 hover:bg-secondary">Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
    )
  }