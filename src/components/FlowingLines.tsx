export function FlowingLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      <svg
        className="w-full h-full opacity-60"
        viewBox="0 0 1440 3600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gradiente referenciando as variáveis do tema */}
          <linearGradient
            id="brandFlowGrad1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-brand)"
              stopOpacity="0.8"
            />
            <stop
              offset="25%"
              stopColor="var(--color-brand-dark)"
              stopOpacity="0.4"
            />
            <stop
              offset="50%"
              stopColor="var(--color-brand)"
              stopOpacity="0.7"
            />
            <stop
              offset="75%"
              stopColor="var(--color-brand-dark)"
              stopOpacity="0.3"
            />
            <stop
              offset="100%"
              stopColor="var(--color-brand)"
              stopOpacity="0.85"
            />
          </linearGradient>

          <linearGradient
            id="brandFlowGrad2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-brand)"
              stopOpacity="0.2"
            />
            <stop
              offset="35%"
              stopColor="var(--color-brand-hover)"
              stopOpacity="0.6"
            />
            <stop
              offset="70%"
              stopColor="var(--color-brand-dark)"
              stopOpacity="0.2"
            />
            <stop
              offset="100%"
              stopColor="var(--color-brand)"
              stopOpacity="0.5"
            />
          </linearGradient>

          <filter id="glowLine" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Linha Mestra Principal */}
        <path
          d="M 720 0 
             C 950 400, 1150 700, 850 1100 
             S 250 1600, 600 2100 
             S 1200 2700, 720 3200 
             S 400 3500, 720 3600"
          stroke="url(#brandFlowGrad1)"
          strokeWidth="2.5"
          filter="url(#glowLine)"
        />

        {/* Linha Secundária Tracejada */}
        <path
          d="M 680 0 
             C 910 420, 1100 680, 810 1120 
             S 210 1580, 560 2080 
             S 1150 2680, 680 3220 
             S 430 3480, 680 3600"
          stroke="url(#brandFlowGrad2)"
          strokeWidth="1.2"
          strokeDasharray="8 6"
          opacity="0.75"
        />

        {/* Ondas Laterais Sutis */}
        <path
          d="M 200 0 C 100 600, 450 1000, 150 1500 S 50 2400, 350 2900 S 200 3400, 250 3600"
          stroke="url(#brandFlowGrad2)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M 1240 0 C 1340 500, 1000 1200, 1300 1800 S 1100 2600, 1350 3100 S 1200 3500, 1180 3600"
          stroke="url(#brandFlowGrad1)"
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Pontos de luz nos nós principais */}
        <circle
          cx="720"
          cy="180"
          r="4"
          fill="var(--color-brand-hover)"
          filter="url(#glowLine)"
        />
        <circle cx="850" cy="1100" r="3.5" fill="var(--color-brand)" />
        <circle cx="600" cy="2100" r="4" fill="var(--color-brand-hover)" />
      </svg>
    </div>
  );
}
