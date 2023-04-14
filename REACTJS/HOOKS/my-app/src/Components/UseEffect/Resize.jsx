import { useEffect, useState } from "react";
function Resize() {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])
        return(
        <div>
            <h1>{size}</h1>
        </div>
    )
}
export default Resize;