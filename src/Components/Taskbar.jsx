import React,{useState , useRef , useEffect } from "react";
import './css/Taskbar.css'
import Icon from "./Icon";
import StartMenu from "./StartMenu";

export default function Taskbar(props){

    const date = new Date();

    // console.log(props.totalApps[1].running);

    const [startMenu,setStartMenu] = useState(false)
    const [startMenuActive, setStartMenuActive] = useState(false);

    function handleStartMenu(){
        setStartMenu(!startMenu)
    }

    return(
        <div className="flex Taskbar">
            <div className="left">
            <StartMenu active={startMenu?"active":""}/>
                <div className="flex icon startButton" onClick={handleStartMenu}>
                    <i className="fa-brands fa-windows"></i>
                </div>
                {props.totalApps.map(runningApp=>(
                runningApp.running&&<Icon key={runningApp.name} appName={runningApp.name} appIcon={runningApp.icon} activeStatus={runningApp.active} />
                ))
                }
            </div>
            <div className="flex right">
                <div className="icon flex arrow">
                <i className="fa-solid fa-chevron-up"></i>
                </div>
                <div className="icon flex battry">
                <i className="fa-sharp fa-solid fa-battery-three-quarters"></i>
                </div>
                <div className="icon flex network">
                <i className="fa-solid fa-wifi"></i>
                </div>
                <div className="icon flex volume">
                <i className="fa-solid fa-volume-high"></i>
                </div>
                <div className="icon flex language">
                    ENG
                </div>
                <div className="icon flex date">
                    <p>
                    {date.getHours()+":"+date.getMinutes()}
                    </p>
                    <p>
                    {date.getDate()+"-"+date.getMonth()+1+"-"+date.getFullYear()}
                    </p>
                </div>
                <div className="icon flex notification">
                <i className="fa-solid fa-message"></i>
                </div>
                <div className="icon flex show-desktop"></div>
            </div>
        </div>
    )
}