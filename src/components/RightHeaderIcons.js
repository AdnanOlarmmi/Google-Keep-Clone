import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

const markup = <div>
<SearchIcon className="icon" />
<RefreshIcon className="icon" />
<ViewAgendaOutlinedIcon className="icon" />
<SettingsOutlinedIcon style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/c/c8/Very_Black_screen.jpg)", backgroundSize: "14%", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className="icon" />
<AppsRoundedIcon className="icon" style={{opsz:"4800",}} /></div>

const RightHeaderIcons = () => {
    return markup;
}

export default RightHeaderIcons;