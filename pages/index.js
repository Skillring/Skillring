import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';

function Flow({ nodes, edges, onNodesChange, onEdgesChange, onConnect }) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
