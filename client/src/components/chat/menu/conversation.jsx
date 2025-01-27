import { useContext, useEffect, useState } from "react";
import { styled, Box, Typography } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 45px;
  display: flex;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: "50%",
  padding: "0 14px",
});

const Conversation = ({ user }) => {
  const { account } = useContext(AccountContext);
  const [imgSrc, setImgSrc] = useState(account.picture);

  const handleError = () => {
    setImgSrc(
      "https://icons.iconarchive.com/icons/iconarchive/incognito-animals/512/Bear-Avatar-icon.png"
    );
  };

  return (
    <Component>
      <Box>
        <Image src={imgSrc} alt="Dp" onError={handleError} />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;
