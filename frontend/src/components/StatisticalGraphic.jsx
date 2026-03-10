export const ScatterPlotSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Axes */}
    <line x1="20" y1="130" x2="180" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <line x1="20" y1="20" x2="20" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    
    {/* Data points - PCA scatter */}
    <circle cx="45" cy="90" r="3" fill="hsl(var(--chart-1))" opacity="0.7" />
    <circle cx="55" cy="85" r="3" fill="hsl(var(--chart-1))" opacity="0.7" />
    <circle cx="50" cy="95" r="3" fill="hsl(var(--chart-1))" opacity="0.7" />
    <circle cx="60" cy="80" r="3" fill="hsl(var(--chart-1))" opacity="0.7" />
    
    <circle cx="120" cy="50" r="3" fill="hsl(var(--chart-2))" opacity="0.7" />
    <circle cx="130" cy="55" r="3" fill="hsl(var(--chart-2))" opacity="0.7" />
    <circle cx="125" cy="45" r="3" fill="hsl(var(--chart-2))" opacity="0.7" />
    <circle cx="135" cy="60" r="3" fill="hsl(var(--chart-2))" opacity="0.7" />
    
    <circle cx="80" cy="110" r="3" fill="hsl(var(--chart-3))" opacity="0.7" />
    <circle cx="90" cy="105" r="3" fill="hsl(var(--chart-3))" opacity="0.7" />
    <circle cx="85" cy="115" r="3" fill="hsl(var(--chart-3))" opacity="0.7" />
    <circle cx="95" cy="100" r="3" fill="hsl(var(--chart-3))" opacity="0.7" />
  </svg>
);

export const RegressionLineSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Axes */}
    <line x1="20" y1="130" x2="180" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <line x1="20" y1="20" x2="20" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    
    {/* Regression line */}
    <line x1="30" y1="120" x2="170" y2="30" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.8" />
    
    {/* Data points */}
    <circle cx="40" cy="115" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="60" cy="100" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="80" cy="80" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="100" cy="65" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="120" cy="55" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="140" cy="45" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
    <circle cx="160" cy="35" r="2.5" fill="hsl(var(--chart-1))" opacity="0.6" />
  </svg>
);

export const DistributionCurveSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Axes */}
    <line x1="20" y1="130" x2="180" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <line x1="20" y1="20" x2="20" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    
    {/* Bell curve */}
    <path
      d="M 30 130 Q 50 120, 70 80 T 100 30 T 130 80 T 170 130"
      stroke="hsl(var(--primary))"
      strokeWidth="2"
      fill="hsl(var(--primary))"
      fillOpacity="0.1"
    />
  </svg>
);

export const HeatmapSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    <rect x="20" y="20" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.3" rx="2" />
    <rect x="55" y="20" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.5" rx="2" />
    <rect x="90" y="20" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.7" rx="2" />
    <rect x="125" y="20" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.9" rx="2" />
    
    <rect x="20" y="55" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.5" rx="2" />
    <rect x="55" y="55" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.8" rx="2" />
    <rect x="90" y="55" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.6" rx="2" />
    <rect x="125" y="55" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.4" rx="2" />
    
    <rect x="20" y="90" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.7" rx="2" />
    <rect x="55" y="90" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.4" rx="2" />
    <rect x="90" y="90" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.9" rx="2" />
    <rect x="125" y="90" width="30" height="30" fill="hsl(var(--chart-1))" opacity="0.5" rx="2" />
  </svg>
);

export const NetworkGraphSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Connections */}
    <line x1="100" y1="40" x2="50" y2="80" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    <line x1="100" y1="40" x2="150" y2="80" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    <line x1="100" y1="40" x2="100" y2="100" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    <line x1="50" y1="80" x2="100" y2="100" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    <line x1="150" y1="80" x2="100" y2="100" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.5" />
    
    {/* Nodes */}
    <circle cx="100" cy="40" r="8" fill="hsl(var(--primary))" />
    <circle cx="50" cy="80" r="6" fill="hsl(var(--chart-2))" />
    <circle cx="150" cy="80" r="6" fill="hsl(var(--chart-2))" />
    <circle cx="100" cy="100" r="6" fill="hsl(var(--chart-3))" />
  </svg>
);

export const FeatureImportanceSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Bars */}
    <rect x="20" y="30" width="140" height="14" fill="hsl(var(--chart-1))" opacity="0.8" rx="2" />
    <rect x="20" y="54" width="110" height="14" fill="hsl(var(--chart-2))" opacity="0.7" rx="2" />
    <rect x="20" y="78" width="85" height="14" fill="hsl(var(--chart-3))" opacity="0.7" rx="2" />
    <rect x="20" y="102" width="60" height="14" fill="hsl(var(--chart-4))" opacity="0.6" rx="2" />
  </svg>
);

export const DeepLearningSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Connections - Input to Hidden */}
    <line x1="40" y1="40" x2="100" y2="30" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.4" />
    <line x1="40" y1="40" x2="100" y2="75" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.4" />
    <line x1="40" y1="40" x2="100" y2="120" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.4" />
    
    <line x1="40" y1="110" x2="100" y2="30" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.4" />
    <line x1="40" y1="110" x2="100" y2="75" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.4" />
    <line x1="40" y1="110" x2="100" y2="120" stroke="hsl(var(--border))" strokeWidth="1" opacity="0.4" />

    {/* Connections - Hidden to Output */}
    <line x1="100" y1="30" x2="160" y2="75" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.6" />
    <line x1="100" y1="75" x2="160" y2="75" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.6" />
    <line x1="100" y1="120" x2="160" y2="75" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.6" />

    {/* Nodes: Input Layer */}
    <circle cx="40" cy="40" r="6" fill="hsl(var(--chart-2))" />
    <circle cx="40" cy="110" r="6" fill="hsl(var(--chart-2))" />

    {/* Nodes: Hidden Layer */}
    <circle cx="100" cy="30" r="7" fill="hsl(var(--chart-1))" />
    <circle cx="100" cy="75" r="7" fill="hsl(var(--chart-1))" />
    <circle cx="100" cy="120" r="7" fill="hsl(var(--chart-1))" />

    {/* Nodes: Output Layer */}
    <circle cx="160" cy="75" r="8" fill="hsl(var(--primary))" />
  </svg>
);

export const RocCurveSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Axes */}
    <line x1="20" y1="130" x2="180" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <line x1="20" y1="20" x2="20" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />

    {/* Random Chance Baseline (Diagonal) */}
    <line x1="20" y1="130" x2="170" y2="30" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

    {/* ROC Curve (High AUC) */}
    <path
      d="M 20 130 Q 30 30, 170 30"
      stroke="hsl(var(--primary))"
      strokeWidth="2.5"
      fill="none"
    />
    
    {/* AUC Fill */}
    <path
      d="M 20 130 Q 30 30, 170 30 L 170 130 Z"
      fill="hsl(var(--primary))"
      fillOpacity="0.1"
    />
  </svg>
);

export const TimeSeriesSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Axes */}
    <line x1="20" y1="130" x2="180" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />
    <line x1="20" y1="20" x2="20" y2="130" stroke="hsl(var(--border))" strokeWidth="1.5" />

    {/* Data Line (ECG / Health / Drift style) */}
    <polyline 
      points="20,90 45,85 55,40 65,115 75,80 100,85 110,60 125,100 135,70 170,75" 
      stroke="hsl(var(--chart-3))" 
      strokeWidth="2" 
      strokeLinejoin="round"
    />
    
    {/* Data points */}
    <circle cx="55" cy="40" r="3" fill="hsl(var(--chart-3))" />
    <circle cx="65" cy="115" r="3" fill="hsl(var(--chart-3))" />
    <circle cx="110" cy="60" r="3" fill="hsl(var(--chart-3))" />
  </svg>
);

export const EdgeChipSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Outer Chip Body */}
    <rect x="60" y="35" width="80" height="80" rx="6" fill="hsl(var(--secondary))" opacity="0.9" />
    
    {/* Inner AI Core */}
    <rect x="75" y="50" width="50" height="50" rx="3" fill="hsl(var(--primary))" opacity="0.8" />
    <circle cx="100" cy="75" r="8" fill="hsl(var(--background))" />

    {/* Circuit Pins (Top & Bottom) */}
    <line x1="70" y1="25" x2="70" y2="35" stroke="hsl(var(--border))" strokeWidth="3" />
    <line x1="85" y1="25" x2="85" y2="35" stroke="hsl(var(--border))" strokeWidth="3" />
    <line x1="100" y1="25" x2="100" y2="35" stroke="hsl(var(--border))" strokeWidth="3" />
    <line x1="115" y1="25" x2="115" y2="35" stroke="hsl(var(--border))" strokeWidth="3" />
    <line x1="130" y1="25" x2="130" y2="35" stroke="hsl(var(--border))" strokeWidth="3" />

    <line x1="70" y1="115" x2="70" y2="125" stroke="hsl(var(--border))" strokeWidth="3" />
    <line x1="85" y1="115" x2="85" y2="125" stroke="hsl(var(--border))" strokeWidth="3" />
    <line x1="100" y1="115" x2="100" y2="125" stroke="hsl(var(--border))" strokeWidth="3" />
    <line x1="115" y1="115" x2="115" y2="125" stroke="hsl(var(--border))" strokeWidth="3" />
    <line x1="130" y1="115" x2="130" y2="125" stroke="hsl(var(--border))" strokeWidth="3" />
  </svg>
);

export const PipelineSVG = ({ className = "" }) => (
  <svg viewBox="0 0 200 150" className={className} fill="none">
    {/* Data / Extraction Box */}
    <rect x="20" y="55" width="35" height="40" rx="4" fill="hsl(var(--chart-1))" opacity="0.7" />
    <line x1="27" y1="65" x2="47" y2="65" stroke="hsl(var(--background))" strokeWidth="2" strokeLinecap="round" />
    <line x1="27" y1="75" x2="40" y2="75" stroke="hsl(var(--background))" strokeWidth="2" strokeLinecap="round" />
    <line x1="27" y1="85" x2="47" y2="85" stroke="hsl(var(--background))" strokeWidth="2" strokeLinecap="round" />

    {/* Arrow 1 */}
    <line x1="60" y1="75" x2="75" y2="75" stroke="hsl(var(--border))" strokeWidth="2" markerEnd="url(#arrowhead)" />

    {/* Model / Processing Box */}
    <rect x="82" y="55" width="35" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.9" />
    <circle cx="99" cy="75" r="8" stroke="hsl(var(--background))" strokeWidth="2" fill="none" />

    {/* Arrow 2 */}
    <line x1="122" y1="75" x2="137" y2="75" stroke="hsl(var(--border))" strokeWidth="2" markerEnd="url(#arrowhead)" />

    {/* Deployment / Dashboard Box */}
    <rect x="145" y="55" width="35" height="40" rx="4" fill="hsl(var(--chart-2))" opacity="0.8" />
    <rect x="150" y="60" width="25" height="15" rx="1" fill="hsl(var(--background))" opacity="0.9" />
    <rect x="150" y="80" width="10" height="10" rx="1" fill="hsl(var(--background))" opacity="0.9" />
    <rect x="165" y="80" width="10" height="10" rx="1" fill="hsl(var(--background))" opacity="0.9" />

    {/* Definition for the Arrowhead */}
    <defs>
      <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <polygon points="0 0, 6 3, 0 6" fill="hsl(var(--border))" />
      </marker>
    </defs>
  </svg>
);