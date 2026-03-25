import { useState } from 'react';
import FlowCanvas from '../components/FlowCanvas';
import Toolbar from '../components/Toolbar';
import HistorySidebar from '../components/HistorySidebar';
import useFlowStore from '../store/flowStore';

const HomePage = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const { setPrompt, setResponse } = useFlowStore();

  const handleToggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  const handleSelectHistory = (historyItem) => {
    setPrompt(historyItem.prompt);
    setResponse(historyItem.response);
    setIsHistoryOpen(false);
  };

  return (
    <div className="home-page">
      <Toolbar 
        className="toolbar" 
        onToggleHistory={handleToggleHistory}
        isHistoryOpen={isHistoryOpen}
      />
      <FlowCanvas className="canvas-wrapper" />
      <HistorySidebar
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        onSelectHistory={handleSelectHistory}
      />
    </div>
  );
};

export default HomePage;
