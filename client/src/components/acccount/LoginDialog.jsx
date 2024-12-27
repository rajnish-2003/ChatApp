import { Dialog, Box, Typography, styled, List, ListItem } from "@mui/material";
import { useContext } from "react";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { AddUser } from "../../service/api";
import { useDispatch } from "react-redux";
import { signInSucesses } from "../../Redux/user/userSlice";

const dialogstyle = {
  width: "60%",
  height: "90%",
  marginTop: "12%",
  boxShadow: "none",
  maxWidth: "100%",
  maxHeight: "100%",
  overflow: "hidden",
};

const QRCOde = styled("img")({
  margin: "50px 0 0 30px",
  height: 230,
  width: 230,
});

const Logo = styled("img")({
  margin: "5px 0 0 50px",
  height: 250,
  width: 250,
});

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
  font-size: 26px;
  margin-bottom: 25px;
  color: #525252;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
    Cantarell, Fira Sans, sans-serif;
  font-weight: 300;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

const DynamicText = styled("span")({
  color: "#8710e8",
  fontSize: "26px",
});

const Login = () => {
  const dispatch = useDispatch();

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const decode = jwtDecode(res.credential);
    setAccount(decode);  // context api
    dispatch(signInSucesses(decode));  // redux action 
    await AddUser(decode);
  };
  const onLoginFailure = (res) => {
    console.log("login failed", res);
  };

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogstyle }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
      maxWidth={"md"}
    >
      <Component>
        <Container>
          <Title>
            Scan the QRcode to Use<DynamicText> EasyChat</DynamicText> on your
            Web
          </Title>
          <StyledList>
            <ListItem>1. Chat instantly, stay connected.</ListItem>
            <ListItem>
              2. Real-time conversations, simplified. Talk anytime, anywhere.
            </ListItem>
            <ListItem>
              3. Smooth messaging, hassle-free. Connect effortlessly, chat
              seamlessly.
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCOde src={qrCodeImage} alt="QR Code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(7%) translateY(-25%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
          </Box>
        </Box>
      </Component>
      <Logo src="chaticon.png" alt="logo" />
    </Dialog>
  );
};

export default Login;
