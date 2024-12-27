import { useContext, useState } from "react";

import { Box, styled } from "@mui/material";
import { Chat as MessageIcon,MoreVert} from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";

//components

import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/Infodrawer";


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
});

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;

const Header = () => {
  const { account } = useContext(AccountContext);
  const [imgSrc, setImgSrc] = useState(account.picture);
  const [openDrawer, setOpenDrawer] = useState(false);


  const handleError = () => {
    
    setImgSrc('https://image.tensorartassets.com/users/common/avatar/625282633672317966/cb35645d-aae0-993a-2aef-354853dcb6cf.png');
  };

    const toggleDrawer = () => {
     setOpenDrawer(true);
   }
  
  return (
    <>
    <Component>
      <Image src={imgSrc} alt="Dp" onError={handleError} onClick={() => toggleDrawer()}/>
      <Wrapper>
        <MessageIcon/>
        <HeaderMenu setOpenDrawer={setOpenDrawer} />
      </Wrapper>
    </Component>
    <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  );
};

export default Header;
