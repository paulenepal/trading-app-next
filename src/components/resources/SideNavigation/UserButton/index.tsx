import Icon from "@/components/common/icon";
import Link from "next/link";

export default function UserButton({userInfo, activeRoute} : {userInfo: any, activeRoute: any}) {
  return (
    // btn-active
    <Link href='/account' className={`btn btn-primary btn-outline ${(activeRoute === '/account') ? 'btn-active' : null} nav-button justify-start group flex-1`}>
      <div className="bg-emerald-200 px-1.5 py-1.5 rounded-full group-hover:scale-110 transition-all ease-in-out">
        <Icon iconName='user-fill' className="text-primary-content" />
      </div>
      <div className={`text-primary-content max-xl:hidden flex-1 text-left ${activeRoute === '/account' ? 'font-bold' : 'font-normal'} group-hover:font-bold transition-all ease-in-out`}>
        <h1>{userInfo?.first_name} {userInfo?.last_name}</h1>
      </div>
      <div className="font-normal text-primary-content max-xl:hidden justify-end">
        <Icon iconName='more-fill' className="text-primary-content"/>
      </div>
    </Link>
  )
}