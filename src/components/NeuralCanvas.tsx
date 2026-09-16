import React, { useEffect, useRef } from 'react';
import './NeuralCanvas.css';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  colorIndex: number;
}

const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Node configuration
    const darkColors = [
      'rgba(0, 242, 254, ', // cyan
      'rgba(79, 172, 254, ', // blue
      'rgba(168, 85, 247, ', // purple
      'rgba(16, 185, 129, ', // emerald
    ];

    const lightColors = [
      'rgba(2, 132, 199, ', // sky blue
      'rgba(79, 70, 229, ', // indigo
      'rgba(147, 51, 234, ', // purple
      'rgba(5, 150, 105, ', // emerald
    ];

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.min(Math.floor((width * height) / 16000), 75);

      for (let i = 0; i < nodeCount; i++) {
        const baseRadius = Math.random() * 2 + 1.2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          pulsePhase: Math.random() * Math.PI * 2,
          colorIndex: Math.floor(Math.random() * 4),
        });
      }
    };

    initNodes();

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const activeColors = isLight ? lightColors : darkColors;

      // Draw faint background grid
      ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= (dx / dist) * force * 2.5;
          node.y -= (dy / dist) * force * 2.5;
          node.radius = node.baseRadius + force * 2.5;
        } else {
          node.radius = node.baseRadius + Math.sin(frame * 0.03 + node.pulsePhase) * 0.5;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.5, node.radius), 0, Math.PI * 2);
        const nodeColor = activeColors[node.colorIndex];
        ctx.fillStyle = `${nodeColor}${isLight ? '0.75)' : '0.85)'}`;
        ctx.shadowBlur = isLight ? 4 : 10;
        ctx.shadowColor = `${nodeColor}${isLight ? '0.3)' : '0.6)'}`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect with nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const ndx = node.x - nodeB.x;
          const ndy = node.y - nodeB.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);
          const maxDist = 130;

          if (nDist < maxDist) {
            const alpha = (1 - nDist / maxDist) * (isLight ? 0.18 : 0.22);
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = isLight
              ? `rgba(2, 132, 199, ${alpha})`
              : `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = isLight ? 1 : 0.8;
            ctx.stroke();
          }
        }

        // Connect with mouse
        if (dist < mouse.radius) {
          const mouseAlpha = (1 - dist / mouse.radius) * (isLight ? 0.35 : 0.45);
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = isLight
            ? `rgba(124, 58, 237, ${mouseAlpha})`
            : `rgba(168, 85, 247, ${mouseAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-canvas" />;
};

export default NeuralCanvas;
