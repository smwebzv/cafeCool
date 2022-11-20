import {MainHolder, LogoFrame, IconFrame} from "./MenuMobileStyle";
import { ReactComponent as HamMenuIcon } from "../../../assets/icon/hamburgerMenu.svg";
import { useState } from "react";
import { ReactComponent as DailyReportsIcon } from "../../../assets/icon/DailyReportsIcon.svg";
import { ReactComponent as Faqs } from "../../../assets/icon/Faqs.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icon/logoutMobileIcon.svg";
import { ReactComponent as LogoIcon } from "../../../assets/icon/LogoIcon.svg";
import { useNavigate } from "react-router-dom";
  
  const MenuMobile = (props) => {
    let navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);

    const changeScreen = (screen) => {
        navigate(screen);
    };

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const logout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload(false);
    }
    
    return (
     <MainHolder>
        <div onClick={() => handleOpenMenu()}>
            <HamMenuIcon/>
        </div>
        {
            openMenu && 
            <div className="bluredBackground" onClick={() => handleOpenMenu()}>
                <div className="menu">
                    <div className="topButtonsHolder">
                        <LogoFrame>
                            <LogoIcon/>
                        </LogoFrame>
                        <IconFrame onClick={() => changeScreen("/")}>
                            <DailyReportsIcon />
                        </IconFrame>
                        <IconFrame onClick={() => changeScreen("/fakture")}>
                            <Faqs />
                        </IconFrame>
                    </div>
                    <IconFrame style={{marginBottom:0}} onClick={() => logout()}>
                        <LogoutIcon />
                    </IconFrame>
                </div>
            </div>
        }
     </MainHolder>
    );
  };
  
  export default MenuMobile;
  