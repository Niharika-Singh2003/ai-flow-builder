import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaHistory } from 'react-icons/fa';
import { getHistory } from '../api/flowApi';
import { UI_TEXT } from '../utils/constants';

const HistorySidebar = ({ isOpen, onClose, onSelectHistory }) => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchHistory();
    }
  }, [isOpen]);

  const fetchHistory = async () => {
    setIsLoading(true);
    try {
      const response = await getHistory();
      setHistory(response?.data || []);
    } catch (error) {
      console.error('Failed to fetch history:', error);
      setHistory([]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`history-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="history-header">
        <div className="history-title">
          <FaHistory className="history-icon" />
          <span>{UI_TEXT.HISTORY_TITLE}</span>
        </div>
        <button className="close-btn" onClick={onClose}>
          <IoClose />
        </button>
      </div>

      <div className="history-content">
        {isLoading ? (
          <div className="history-loading">
            <div className="history-skeleton" />
            <div className="history-skeleton" />
            <div className="history-skeleton" />
          </div>
        ) : history.length === 0 ? (
          <div className="history-empty">
            <FaHistory className="empty-icon" />
            <p>{UI_TEXT.HISTORY_EMPTY}</p>
          </div>
        ) : (
          <div className="history-list">
            {history.map((item, index) => (
              <div
                key={item._id}
                className="history-item"
                onClick={() => onSelectHistory(item)}
              >
                <div className="history-item-header">
                  <span className="history-item-index">#{history.length - index}</span>
                  <span className="history-item-date">{formatDate(item.createdAt)}</span>
                </div>
                <div className="history-item-content">
                  <p className="history-prompt">{item.prompt}</p>
                  <p className="history-response">{item.response}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistorySidebar;
