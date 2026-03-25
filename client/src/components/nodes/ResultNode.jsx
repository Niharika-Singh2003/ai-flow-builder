import { Handle, Position } from '@xyflow/react';
import PropTypes from 'prop-types';
import { BsStars } from 'react-icons/bs';
import { FiCopy } from 'react-icons/fi';
import { useState } from 'react';
import useFlowStore from '../../store/flowStore';
import { EMPTY_RESPONSE, UI_TEXT } from '../../utils/constants';

const ResultNode = ({ isConnectable }) => {
  const { response, isLoading } = useFlowStore();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (response) {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const content = () => {
    if (isLoading) {
      return (
        <div className="skeleton-group">
          <div className="skeleton-line skeleton-line-lg" />
          <div className="skeleton-line skeleton-line-md" />
          <div className="skeleton-line skeleton-line-sm" />
        </div>
      );
    }

    if (!response) {
      return (
        <div className="node-placeholder-wrap">
          <BsStars className="node-placeholder-icon" />
          <p className="node-placeholder">{EMPTY_RESPONSE}</p>
        </div>
      );
    }

    return <p className="response-text fade-in">{response}</p>;
  };

  return (
    <div className="flow-node result-node">
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      
      <div className="node-header">
        <p className="node-title">{UI_TEXT.RESPONSE_LABEL}</p>
        {response && !isLoading && (
          <button 
            className={`copy-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
            title="Copy response"
          >
            <FiCopy />
            {copied && <span className="copy-tooltip">Copied!</span>}
          </button>
        )}
      </div>
      
      <div className="response-container">{content()}</div>
    </div>
  );
};

ResultNode.propTypes = {
  isConnectable: PropTypes.bool,
};

ResultNode.defaultProps = {
  isConnectable: true,
};

export default ResultNode;
