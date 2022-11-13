import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const markup = <div className="leftHeaderIcons flex-row"><MenuIcon className="icon"  /><img src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png" alt="Google Keep Icon"/>
<span>Keep</span>
</div>

const LeftHeaderIcons = () => {
    return markup;
}

export default LeftHeaderIcons;