import './App.css'

import Iframe from "./components/deepar";

const urlBows = 'https://wearifyai.github.io/ARTryOn/?effect=bows';

const App = () => {
  return (
    <Iframe src={urlBows} />
  )
};

export default App;