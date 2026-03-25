import { ReactFlowProvider } from '@xyflow/react';
import HomePage from './pages/HomePage';
import './styles/globals.css';

const App = () => {
  return (
    <ReactFlowProvider>
      <HomePage />
    </ReactFlowProvider>
  );
};

export default App;
