import './App.css';
import Register from './register';
import Main from './main';
import Delete from './del';
import UpdatePage from './update';
function App() {
  return(
    <div className="App">
      <Register />
      <Main />
      <Delete />
      <UpdatePage/>
    </div>
  );
}

export default App;
