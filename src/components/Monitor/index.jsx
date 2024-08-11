import { useEffect, useState } from "react"
import { CaptchaIcon, CaptchaIconActive, DashIcon, DashIconActive, MonitorImage, ProfilesIcon, ProfilesIconActive, ProxiesIcon, ProxiesIconActive, Screen1, Screen2, Screen3, Screen4, Screen5, Screen6, SettingsIcon, SettingsIconActive, TasksIcon, TasksIconActive } from "../Images"

const Monitor = ({}) => {
    const [screenIndex, setScreenIndex] = useState(1)

    const locos = [
        {
            icon: DashIcon,
            activeIcon: DashIconActive,
            name: "Dashboard"
        },
        {
            icon: TasksIcon,
            activeIcon: TasksIconActive,
            name: "Tasks"
        },
        {
            icon: ProfilesIcon,
            activeIcon: ProfilesIconActive,
            name: "Profiles"
        },
        {
            icon: ProxiesIcon,
            activeIcon: ProxiesIconActive,
            name: "Proxies"
        },
        {
            icon: CaptchaIcon,
            activeIcon: CaptchaIconActive,
            name: "Captcha"
        },
        {
            icon: SettingsIcon,
            activeIcon: SettingsIconActive,
            name: "Settings"
        }
    ]

    return (
        <div className="monitorWrapper">
            <img className="monitorImage" src={MonitorImage} alt="" />
            <img className="monitorScreen" />
            {
                [Screen1, Screen2, Screen3, Screen4, Screen5, Screen6].map((screen, index) => {
                    return (
                        <img key={index} style={screenIndex == index+1 ? {opacity: 1} : {opacity: 0}} className="monitorScreen" src={screen} index={index + 1} loading="eager"/>
                    )
                })
            }
            <div className="nav">
                
                {locos.map((data, index) => {
                    return (
                        <div onClick={e => setScreenIndex(index+1)} className={`navButton ${screenIndex == index+1 ? "active" : ""}`}>
                            <img style={screenIndex == index+1 ? {display: "block"} : {display: "none"}} src={data.activeIcon} alt="" />
                            <img style={screenIndex != index+1 ? {display: "block"} : {display: "none"}} src={data.icon} alt="" />
                            <p>{data.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
 
export default Monitor