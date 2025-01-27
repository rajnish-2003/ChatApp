import express from 'express';

import { addUser,getUsers} from '../controller/user-controller.js';
import { newMessage, getMessage }from '../controller/message-controller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { newConversation, getConversation } from '../controller/conversation-controller.js';
//import { verifyToken } from '../middleware/AuthMiddleware.js';




const route = express.Router();

route.post('/add',addUser);
route.get('/getusers',getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);

route.post('/file/upload', upload.single('file'), uploadImage);
route.get('/file/:filename', getImage);


export default route;