import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId='998656378484-30mg522fe8gj6c8uhbs3ee64oe0vphec.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
      
    </GoogleOAuthProvider>
  );
}

export default App;
