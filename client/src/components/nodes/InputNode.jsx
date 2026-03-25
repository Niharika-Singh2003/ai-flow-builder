import { Handle, Position } from '@xyflow/react';
import PropTypes from 'prop-types';
import { FiSend } from 'react-icons/fi';
import useFlowStore from '../../store/flowStore';
import { PLACEHOLDER_TEXT, UI_TEXT } from '../../utils/constants';

const InputNode = ({ isConnectable }) => {
  const { prompt, setPrompt } = useFlowStore();
  const characterCount = prompt.length;
  const maxCharacters = 500;

  return (
    <div className="flow-node input-node">
      <div className="node-header">
        <p className="node-title">{UI_TEXT.PROMPT_LABEL}</p>
        <div className="node-icon">
          <FiSend />
        </div>
      </div>
      
      <div className="input-wrapper">
        <textarea
          className="nodrag prompt-textarea"
          value={prompt}
          onChange={(event) => {
            const text = event.target.value;
            if (text.length <= maxCharacters) {
              setPrompt(text);
            }
          }}
          placeholder={PLACEHOLDER_TEXT}
          rows={8}
          maxLength={maxCharacters}
        />
        <div className="character-count">
          <span className={characterCount > maxCharacters * 0.9 ? 'warning' : ''}>
            {characterCount}/{maxCharacters}
          </span>
        </div>
      </div>
      
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </div>
  );
};

InputNode.propTypes = {
  isConnectable: PropTypes.bool,
};

InputNode.defaultProps = {
  isConnectable: true,
};

export default InputNode;
