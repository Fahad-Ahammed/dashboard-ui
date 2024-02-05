import Cookies from 'js-cookie';

const authenticateUser = () => {
  Cookies.set('authenticated', 'true');
};

const logoutUser = () => {
  Cookies.remove('authenticated');
};

const checkAuthentication = () => {
  return Cookies.get('authenticated') === 'true';
};

export { authenticateUser, logoutUser, checkAuthentication };
