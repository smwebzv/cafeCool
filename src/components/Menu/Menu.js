import { IconFrame, LogoFrame, MenuFrame, MenuFrame1, MenuFrame2 } from "./MenuStyle";
import { ReactComponent as Graficons } from "../../assets/icon/Icon2.svg";
import { ReactComponent as DailyReportsIcon } from "../../assets/icon/DailyReportsIcon.svg";
import { ReactComponent as Faqs } from "../../assets/icon/Faqs.svg";
import { ReactComponent as InformationIcon } from "../../assets/icon/Icon6.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icon/Icon7.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/Icon8.svg";
import { ReactComponent as LogoIcon } from "../../assets/icon/LogoIcon.svg";
import { useState } from "react";

const Menu = (props) => {
    const [hover, setHover] = useState(false);

    const hovered = () => {
        setHover(true);
    }

    const notHovered = () => {
        setHover(false);
    }

    return(
        <MenuFrame onMouseEnter={() => hovered()} onMouseLeave={() => notHovered()} hover={hover}>
            <MenuFrame1 hover={hover}>
                <MenuFrame2 hover={hover}>
                    <LogoFrame hover={hover}>
                        <LogoIcon />
                    </LogoFrame>
                    <IconFrame hover={hover}>          
                        <DailyReportsIcon />
                        {
                            hover && 
                            <div className="text">Dnevni izvjestaji</div>
                        }     
                    </IconFrame >
                    <IconFrame hover={hover}>
                        <Faqs />
                        {
                            hover &&
                            <div className="text">Fakture</div>
                        }     
                    </IconFrame>
                    <IconFrame hover={hover}>
                        <Graficons />
                        {
                            hover &&
                            <div className="text">Grafikoni</div>
                        }
                    </IconFrame>
                </MenuFrame2>
                <MenuFrame2>
                    <IconFrame hover={hover}>
                        <InformationIcon />
                        {
                            hover && 
                            <div className="text">What’s New</div>
                        }  
                    </IconFrame>
                    <IconFrame hover={hover}>
                        <SettingsIcon />
                        {
                            hover && 
                            <div className="text">Settings</div>
                        }  
                    </IconFrame>
                    <IconFrame hover={hover}>
                        <UserIcon />
                        {
                            hover && 
                            <div className="text">Vladan Djokic</div>
                        }  
                    </IconFrame>
                </MenuFrame2>
            </MenuFrame1>
        </MenuFrame>
    );
}

export default Menu;
