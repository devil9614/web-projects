import Image from "next/image"
import HeaderItems from "./HeaderItems"
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline"

const Header = () => {
    return (
        <header className = "flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className = "flex flex-row justify-evenly max-w-2xl ">
            <HeaderItems title = 'HOME' Icon = {HomeIcon}/>
            <HeaderItems title = 'TRENDING' Icon = {LightningBoltIcon}/>
            <HeaderItems title = 'VERIFIED' Icon = {BadgeCheckIcon}/>
            <HeaderItems title = 'COLLECTIONS' Icon = {CollectionIcon}/>
            <HeaderItems title = 'SEARCH' Icon = {SearchIcon}/>
            <HeaderItems title = 'ACCOUNT' Icon = {UserIcon}/>
            </div>
           <Image
           className = "object-contain"
           src = "https://links.papareact.com/ua6" height = {100} width = {200}/> 
        </header>
    )
}

export default Header
