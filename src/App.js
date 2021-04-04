// import './App.css';

import user from './components/Profile/user-data.json';
import statistics from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends-data.json';
import transactions from './components/Transactions/transactions-data.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transactions/Transactions';
import Container from './components/Container/Container';


const App = () => {
  return (
    <div className="App">
      <Container>
        <Profile user={user} />
        <Statistics stats={statistics} title={"Upload stats"} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

export default App;
