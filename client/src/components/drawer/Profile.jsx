import { useContext,useState} from "react";
import { Box, styled, Typography } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";




const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const Image = styled('img') ({
    width: 120,
    height: 120,
    borderRadius: '50%',
    padding: '25px 0'
});

const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #9f05ff;
        font-weight: 200;
    };
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`;
const DescriptionContainer = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        color: #8696a0;
        font-size: 13px;
    }
`;


const Profile = () => {
  const { account } = useContext(AccountContext);
  const [imgSrc, setImgSrc] = useState(account.picture);
  const handleError = () => {
    setImgSrc(
      "https://image.tensorartassets.com/users/common/avatar/625282633672317966/cb35645d-aae0-993a-2aef-354853dcb6cf.png"
    );
  };

  return (
    <>
      <ImageContainer>
        <Image src={imgSrc} alt="Dp" onError={handleError} />
      </ImageContainer>

      <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DescriptionContainer>
                <Typography>This is not your username. This name will be visible to your EasyChat contacts.</Typography>
      </DescriptionContainer>
      <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Don't Worry Be Happy😊😊!</Typography>
      </BoxWrapper>
    </>
  );
};

export default Profile;
