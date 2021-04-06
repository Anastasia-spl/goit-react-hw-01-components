//components
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transactions/Transactions';
import Container from './components/Container/Container';

import user from './data/user-data.json';
import statistics from './data/statistical-data.json';
import friends from './data/friends-data.json';
import transactions from './data/transactions-data.json';



const App = () => {
  return (
    <div className="App">
      <Container>
        <Profile  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />
        <Statistics stats={statistics} title={"Upload stats"} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
}

export default App;
