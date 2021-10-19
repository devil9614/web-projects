import { useRef,useEffect } from "react"

export const useKey = (key,cb) => {
    const callbackRef = useRef(cb)
    useEffect(() => {
        callbackRef.current = cb
    })
    useEffect(() => {
        const handle = (event) => {
            if (event.code === key){
                callbackRef.current(event)
            }
            else{
                console.log(false)
            }
        }
        document.addEventListener("keypress",handle)
    },[key])
    
}