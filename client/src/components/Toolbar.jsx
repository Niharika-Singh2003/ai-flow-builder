import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import { FaSpinner, FaHistory } from 'react-icons/fa';
import { HiBolt } from 'react-icons/hi2';
import useFlow from '../hooks/useFlow';
import { UI_TEXT } from '../utils/constants';

const Toolbar = ({ className, onToggleHistory, isHistoryOpen }) => {
  const { response, isLoading, isSaving, handleRunFlow, handleSave } = useFlow();

  return (
    <>
      <div className={className}>
        <div className="toolbar-brand">
          <HiBolt className="brand-icon" />
          <span className="brand-text">{UI_TEXT.APP_NAME}</span>
        </div>

        <div className="toolbar-actions">
          <button 
            type="button" 
            className="btn btn-history" 
            onClick={onToggleHistory}
          >
            <FaHistory />
            <span>{UI_TEXT.VIEW_HISTORY}</span>
          </button>

          <button type="button" className="btn btn-primary" onClick={handleRunFlow} disabled={isLoading}>
            {isLoading ? <FaSpinner className="spin" /> : null}
            <span>{isLoading ? UI_TEXT.RUNNING : UI_TEXT.RUN_FLOW}</span>
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSave}
            disabled={isSaving || !response}
          >
            {isSaving ? <FaSpinner className="spin" /> : null}
            <span>{isSaving ? UI_TEXT.SAVING : UI_TEXT.SAVE}</span>
          </button>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: {
            style: {
              background: '#1a2e1a',
              border: '1px solid #22c55e',
              color: '#86efac',
            },
          },
          error: {
            style: {
              background: '#2e1a1a',
              border: '1px solid #ef4444',
              color: '#fca5a5',
            },
          },
        }}
      />
    </>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  onToggleHistory: PropTypes.func,
  isHistoryOpen: PropTypes.bool,
};

Toolbar.defaultProps = {
  className: '',
  onToggleHistory: () => {},
  isHistoryOpen: false,
};

export default Toolbar;
