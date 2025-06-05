import { useEffect, useRef } from 'react';

interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: string;
}

interface DiagramEdge {
  from: string;
  to: string;
}

interface DiagramData {
  name: string;
  width: number;
  height: number;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

const ArchitectureDiagram = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const fetchDiagramData = async () => {
      try {
        const response = await fetch('/images/architecture.json');
        const data: DiagramData = await response.json();
        renderDiagram(data);
      } catch (error) {
        console.error('Error loading diagram data:', error);
      }
    };
    
    fetchDiagramData();
    
    function renderDiagram(data: DiagramData) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const { width, height, nodes, edges } = data;
      
      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw connections first (so they appear behind nodes)
      ctx.strokeStyle = '#6b7280';
      ctx.lineWidth = 2;
      
      edges.forEach((edge: DiagramEdge) => {
        const fromNode = nodes.find((n: DiagramNode) => n.id === edge.from);
        const toNode = nodes.find((n: DiagramNode) => n.id === edge.to);
        
        if (fromNode && toNode) {
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(toNode.x, toNode.y);
          ctx.stroke();
        }
      });
      
      // Draw nodes
      nodes.forEach((node: DiagramNode) => {
        // Set colors based on node type
        let fillColor = '#1f2937';
        let strokeColor = '#4b5563';
        let textColor = '#ffffff';
        
        switch (node.type) {
          case 'module':
            fillColor = '#7c3aed'; // Purple for modules
            strokeColor = '#8b5cf6';
            break;
          case 'data':
            fillColor = '#1d4ed8'; // Blue for data
            strokeColor = '#3b82f6';
            break;
          case 'input':
            fillColor = '#047857'; // Green for input
            strokeColor = '#10b981';
            break;
          case 'output':
            fillColor = '#b91c1c'; // Red for output
            strokeColor = '#ef4444';
            break;
        }
        
        // Draw node
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        
        // Draw rounded rectangle
        const width = 150;
        const height = 50;
        const radius = 10;
        const x = node.x - width / 2;
        const y = node.y - height / 2;
        
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        
        ctx.fill();
        ctx.stroke();
        
        // Draw text
        ctx.fillStyle = textColor;
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.x, node.y);
      });
    }
  }, []);
  
  return (
    <div className="w-full overflow-auto bg-gray-900 rounded-xl border border-gray-700 p-4">
      <canvas 
        ref={canvasRef} 
        className="mx-auto"
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
};

export default ArchitectureDiagram;
