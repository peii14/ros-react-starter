import logo from './logo.svg';
import './App.css';
import { RosConnection } from './components/ros-react/functions/RosConnection'
function App() {
  return (
    <>
    <RosConnection autoConnectTimeout={10} url={"ws://192.168.0.106:9090"} autoConnect>

    </RosConnection>
    </>
  );
}

export default App;
