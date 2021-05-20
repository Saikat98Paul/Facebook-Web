import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { ExpandMoreOutlined } from "@material-ui/icons";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { useStateValue } from "./StateProvider";

function Sidebar({ title, Icon }) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow
        title="Developed by Saikat Paul"
        src="https://lh3.googleusercontent.com/ogw/ADGmqu9yFxZKWguThH6ws_fREDFEl1mMwDxUUHCtEs0UvA=s32-c-mo"
      />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
}

export default Sidebar;
