import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import { AccountContext } from '../context/AccountProvider';

//components
import LoginDialog  from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #dcdcdc;
`

const Header = styled(AppBar)`
    height: 125px;
    Background-color: #8181EA;
    box-shadow: none;
`
const LoginHeader = styled(AppBar)`
    height: 220px;
    Background-color: #6262e5;
    box-shadow: none;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return(
        <Component>
            {
                account ? 
                <>
                    <Header>          
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog/>
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </>
            }
        </Component>
    )
}

export default Messenger;