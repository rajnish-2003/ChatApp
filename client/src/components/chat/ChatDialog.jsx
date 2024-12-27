import { useContext } from 'react';
import { Dialog, styled, Box } from '@mui/material';

import { UserContext } from '../../context/AccountProvider';

//components

import Menu from '../chat/menu/menu';
import EmptyChat from './chat/EmptyChat';

const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};

const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;
`;
    
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
   

const chatDialog=()=>{

    return(
        <Dialog 
        open={true} 
        BackdropProps={{style: {backgroundColor: 'unset'}}}
        PaperProps={{ sx: dialogStyle }}
        maxWidth={'md'}
      >
      <Component>
        <LeftComponent>
            <Menu/>
        </LeftComponent>

        
        <RightComponent>
            <EmptyChat/>
        </RightComponent>
      </Component>


       </Dialog>
    )
}

export default chatDialog;