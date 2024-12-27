import { Box, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  padding: 30px 0;
  text-align: center;
  height: 100vh;
  background: #9f05ff;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  marginTop: 100,
  width: 350,
});

const Title = styled(Typography)`
  font-size:25px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  font-family: inherit;
`;

/*const StyledDivider = styled(Divider)`
margin: 40px 0;
opacity: 0.4;
`;
*/

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src="chaticon.png" alt="empty" />
        <Title style={{ color: "#ffffff" }}>EasyChat</Title>
        <SubTitle>
        EasyChat makes connecting with others simple and hassle-free, providing a seamless platform.
        </SubTitle>
        <SubTitle>
        Connect with your friends and colleagues in just a few easy clicks, anytime, anywhere.
        </SubTitle>
      </Container>
    </Component>
  );
};

export default EmptyChat;
