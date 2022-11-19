import {
  IconFrame,
  LogoFrame,
  MenuFrame,
  MenuFrame1,
  MenuFrame2,
} from "./MenuStyle";
import { ReactComponent as Graficons } from "../../assets/icon/Icon2.svg";
import { ReactComponent as DailyReportsIcon } from "../../assets/icon/DailyReportsIcon.svg";
import { ReactComponent as Faqs } from "../../assets/icon/Faqs.svg";
import { ReactComponent as InformationIcon } from "../../assets/icon/Icon6.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icon/Icon7.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/Icon8.svg";
import { ReactComponent as LogoIcon } from "../../assets/icon/LogoIcon.svg";
import { useNavigate } from "react-router-dom";

const Menu = (props) => {
  let navigate = useNavigate();

  const changeScreen = (screen) => {
    navigate(screen);
  };

  return (
    <MenuFrame>
      <MenuFrame1>
        <MenuFrame2>
          <LogoFrame>
            <LogoIcon />
          </LogoFrame>
          <IconFrame onClick={() => changeScreen("/")}>
            <DailyReportsIcon />

            <div className="text">Dnevni izvjestaji</div>
          </IconFrame>
          <IconFrame onClick={() => changeScreen("/fakture")}>
            <Faqs />

            <div className="text">Fakture</div>
          </IconFrame>
          {/* <IconFrame onClick={() => changeScreen()}>
            <Graficons />

            <div className="text">Grafikoni</div>
          </IconFrame> */}
        </MenuFrame2>
        <MenuFrame2>
          {/* <IconFrame>
            <InformationIcon />

            <div className="text">What’s New</div>
          </IconFrame>
          <IconFrame>
            <SettingsIcon />

            <div className="text">Settings</div>
          </IconFrame> */}
          <IconFrame>
            <UserIcon />

            <div className="text">Vladan Djokic</div>
          </IconFrame>
        </MenuFrame2>
      </MenuFrame1>
    </MenuFrame>
  );
};

export default Menu;
