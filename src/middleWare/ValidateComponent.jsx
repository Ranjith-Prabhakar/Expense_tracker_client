import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';
import { getLocalStorageTransactions, getLocalStorageUser } from '../utils/localStorage';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const ValidateComponent = ({ children }) => {
  const navigate = useNavigate();
  const loginUser = useStore(state => state.loginUser); // Access loginUser function directly from the store
  const addTransactios = useStore(state => state.addTransactios);
  const user = getLocalStorageUser();
  const transactions = getLocalStorageTransactions();

  useEffect(() => {
    if (user && user?.userName) {
      loginUser(user);
    } else {
      navigate("/login");
    }
    if (transactions && transactions?.length) {
      addTransactios(transactions);
    }
  }, [addTransactios, loginUser, navigate, transactions, user]);

  return (
    <>{children}</> // Render children properly
  );
};

export default ValidateComponent;
