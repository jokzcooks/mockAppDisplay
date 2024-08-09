import { useEffect } from "react"
import { Bitmoji, Eye } from "../Images"

const BitmojiMouseWatcher = ({}) => {

    const getAngle = (cx, cy, ex, ey) => {

        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI;
        return deg
    }

    const handleMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const anchor = document.getElementById("anchor");
        const rect = anchor.getBoundingClientRect();
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height / 2;

        const angleDeg = getAngle(mouseX, mouseY, anchorX, anchorY)

        console.log(angleDeg)

        const eyes = document.querySelectorAll(".eye")
        eyes.forEach(eye => {
            eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        })

    }

    useEffect(() => {

        document.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (

        <div className="bitmojiWrapper">
            <img id="anchor" className="avatar" src={Bitmoji} alt="" />
            <img className="eye left" src={Eye} alt="" />
            <img className="eye right" src={Eye} alt="" />
        </div>
    )
}

export default BitmojiMouseWatcher