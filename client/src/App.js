import { GoogleOAuthProvider } from '@react-oauth/google';

// components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '809313082992-dnm1od95q19k6ugktv3lpsnat1qhb135.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
