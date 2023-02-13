
import BasicTable from './Components/testTable';
import './App.css';

function App() {
  return (
    <div>
      <header> {new Date().toLocaleDateString()}</header>
     <BasicTable></BasicTable>
    </div>
  );
}

export default App;
