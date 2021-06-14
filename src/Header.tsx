import { useOktaAuth } from '@okta/okta-react';

const Header = () => {
    const { oktaAuth, authState } = useOktaAuth();
  
    const login = async () => { await oktaAuth.signInWithRedirect(); }
    const logout = async () => { await oktaAuth.signOut({ revokeAccessToken: false, postLogoutRedirectUri: 'https://mpi-internal.okta.com/app/UserHome'}); }
  
    const userText = authState.isAuthenticated
      ? <button onClick={ logout }>Logout</button>
      : <button onClick={ login }>Sign In</button>;
  
    return (
      <header>
        <div>React Login</div>
        {userText}
      </header>
    );
  }

  export default Header