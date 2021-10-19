function HeaderItems({title,Icon}) {
    return (
        <div className = "group flex flex-col group cursor-pointer items-center w-12 sm:w-20 ">
            <Icon className = "h-8 mb-1 text-gray-500 group-hover:text-white group-hover:animate-bounce"/>
            <p className = "tracking-widest group-hover:opacity-100 opacity-0 group-hover:text-white">{title}</p>
        </div>
    )
}

export default HeaderItems
