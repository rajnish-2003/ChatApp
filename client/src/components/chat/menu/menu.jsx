import { useState } from 'react';

import { Box,styled } from '@mui/material';


//components

import Header from "./Header";
import Search from './Search';


const Menu=()=>{
    return(
        <Box>
            <Header/>
            <Search/>
        </Box>
    )
}

export default Menu;