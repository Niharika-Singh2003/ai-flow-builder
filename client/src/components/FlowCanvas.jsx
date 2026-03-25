import { Background, Controls, ReactFlow, ViewportPortal } from '@xyflow/react';
import PropTypes from 'prop-types';
import '@xyflow/react/dist/style.css';
import InputNode from './nodes/InputNode';
import ResultNode from './nodes/ResultNode';
import GradientEdge from './edges/GradientEdge';
import useFlowStore from '../store/flowStore';
import { NODE_TYPES } from '../utils/constants';

const nodeTypes = {
  [NODE_TYPES.INPUT]: InputNode,
  [NODE_TYPES.RESULT]: ResultNode,
};

const edgeTypes = {
  gradientEdge: GradientEdge,
};

const initialNodes = [
  { id: '1', type: NODE_TYPES.INPUT, position: { x: 100, y: 200 }, data: {} },
  { id: '2', type: NODE_TYPES.RESULT, position: { x: 600, y: 200 }, data: {} },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'gradientEdge',
    animated: true,
  },
];

const inputNodePosition = { x: 100, y: 200 };
const inputNodeDimensions = { width: 380, height: 280 };
const resultNodePosition = { x: 600, y: 200 };

const FlowCanvas = ({ className }) => {
  const { isFlowAnimating, flowAnimationKey } = useFlowStore();

  const orbStartX = inputNodePosition.x + inputNodeDimensions.width - 5;
  const orbStartY = inputNodePosition.y + inputNodeDimensions.height / 2 - 5;
  const orbMoveX = resultNodePosition.x - (inputNodePosition.x + inputNodeDimensions.width);

  return (
    <div className={className}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background variant="dots" gap={20} size={1.2} color="#1a1a2e" />
        <Controls />
        {isFlowAnimating ? (
          <ViewportPortal>
            <div
              key={flowAnimationKey}
              className="data-orb"
              style={{
                left: `${orbStartX}px`,
                top: `${orbStartY}px`,
                '--orb-move-x': `${orbMoveX}px`,
              }}
            />
          </ViewportPortal>
        ) : null}
      </ReactFlow>
    </div>
  );
};

FlowCanvas.propTypes = {
  className: PropTypes.string,
};

FlowCanvas.defaultProps = {
  className: '',
};

export default FlowCanvas;
