import Icon from "@/components/common/icon";
import Link from "next/link";

export default function NavButton({ text, iconName, routeTo, activeRoute} : { text: string, iconName: string, routeTo: string, activeRoute: any}) {
  return (
    // btn-active
    <Link href={routeTo} className={`btn btn-primary btn-outline ${(activeRoute === routeTo) ? 'btn-active' : null} nav-button justify-start group`}>
      <div className={`rounded-full text-xl ${activeRoute === routeTo ? 'scale-110' : null} group-hover:scale-110 transition-all ease-in-out`}>
        <Icon iconName={iconName} className="text-primary-content" />
      </div>
      <div className={` text-primary-content max-xl:hidden ${activeRoute === routeTo ? 'font-bold' : 'font-normal'} group-hover:font-bold transition-all ease-in-out`}>
        <h1>{text}</h1>
      </div>
    </Link>
  )
}