import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import { googleLogout } from '@react-oauth/google';
import { AccountContext } from "../../../context/AccountProvider";


import { clientId } from '../../../constants/data';


const MenuOption = styled(MenuItem)`
    font-size: 12px
    padding: 14px 50px 4px 20px;
    color: #4A4A4A;
`;

const HeaderMenu = ({setOpenDrawer}) => {
  const [open, setOpen] = useState(null);

  const handleClose = () => {
    setOpen(null);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
            
          }}
        >
          Profile
        </MenuOption>
        <MenuOption
          onClick={() => {
            handleClose();
          }}
        >
         Logout
        </MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
