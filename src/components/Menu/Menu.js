import { IconFrame, LogoFrame, MenuFrame, MenuFrame1 } from "./MenuStyle";
import { ReactComponent as AddIcon } from "../../assets/icon/Icon1.svg";
import { ReactComponent as StatIcon } from "../../assets/icon/Icon2.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icon/Icon3.svg";
import { ReactComponent as ProtectionIcon } from "../../assets/icon/Icon4.svg";
import { ReactComponent as FolderIcon } from "../../assets/icon/Icon5.svg";
import { ReactComponent as InformationIcon } from "../../assets/icon/Icon6.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icon/Icon7.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/Icon8.svg";
import { ReactComponent as LogoIcon } from "../../assets/icon/LogoIcon.svg";

const Menu = () => {
    return(
        <MenuFrame>
            <MenuFrame1>
                <LogoFrame>
                    <LogoIcon />
                </LogoFrame>
                <IconFrame>
                    <AddIcon />
                </IconFrame>
                <IconFrame>
                    <StatIcon />
                    <div className="text">Dnevni izvjestaji</div>    
                </IconFrame>
                <IconFrame>
                    <CalendarIcon />
                    <div className="text">Dnevni izvjestaji</div>
                </IconFrame>
                <IconFrame>
                    <ProtectionIcon />
                    <div className="text">Dnevni izvjestaji</div>
                </IconFrame>
                <IconFrame>
                    <FolderIcon />
                    <div className="text">Dnevni izvjestaji</div>
                </IconFrame>
            </MenuFrame1>
            <MenuFrame1>
                <IconFrame>
                    <InformationIcon />
                </IconFrame>
                <IconFrame>
                    <SettingsIcon />
                </IconFrame>
                <IconFrame>
                    <UserIcon />
                </IconFrame>
            </MenuFrame1>
        </MenuFrame>
    );
}

export default Menu;
