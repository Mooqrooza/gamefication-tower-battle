import './styles.scss';

const html = ({ number }) => `
  <div class="floor">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="100" viewBox="0 0 200 100">
      <path fill="#e25029" opacity="0.5" class="red-alert" d="M164,82H37V81H36L22,67V58H40V21H160V78h0V59h18v9Z"/>
      <path fill="#554431" d="M164,82l14-14V59H160V82h4Z"/>
      <path fill="#77634c" d="M36,81L22,67V58H99V81H36Z"/>
      <rect fill="#856f56" x="40" y="21" width="120" height="57"/>
      <rect fill="#9e866b" x="40" y="21" width="40" height="20"/>
      <rect fill="#8f7a62" x="60" y="41" width="40" height="20"/>
      <rect fill="#7e6951" x="80" y="61" width="40" height="17"/>
      <rect fill="#8f785e" x="120" y="61" width="40" height="17"/>
      <rect fill="#8b755b" x="80" y="22" width="40" height="20"/>
      <rect fill="#846e54" x="120" y="22" width="40" height="20"/>
      <rect fill="#897258" x="100" y="41" width="40" height="20"/>
      <rect fill="#897258" x="40" y="61" width="39" height="17"/>
      <rect fill="#897258" x="40" y="21" width="40" height="57"/>
      <rect fill="#3d3022" opacity="0.3" x="100" y="21" width="60" height="57"/>
      <rect fill="#3d3022" opacity="0.15" x="120" y="21" width="40" height="57"/>
      <rect fill="#3d3022" opacity="0.2" x="40" y="21" width="120" height="10"/>
      <path fill="#2f261c" d="M54,61l6.5-6L67,61V78H54V61Zm40,0,6.5-6,6.5,6V78H94V61Zm38,0,6.5-6,6.5,6V78H132V61Z"/>
      <g class="door-marks">
        <path class="mark" fill="#76624b" d="M60.5,58.384L63.616,61.5,60.5,64.616,57.384,61.5Z"/>
        <path class="mark" fill="#76624b" d="M100.5,58.423l3.077,3.077L100.5,64.577,97.422,61.5Z"/>
        <path class="mark" fill="#76624b" d="M138.5,58.423l3.077,3.077L138.5,64.577,135.423,61.5Z"/>
      </g>
      <rect fill="#5c4a35" x="37" y="78" width="126" height="4"/>
      <path class="wrong-cover" fill="#e25029" opacity="0" d="M164,82H37V81H36L22,67V58H40V21H160V78h0V59h18v9Z"/>
      <path class="correct-cover" fill="#318a46" opacity="0" d="M164,82H37V81H36L22,67V58H40V21H160V78h0V59h18v9Z"/>
      <path class="current-cover" opacity="0" d="M164,82H37V81H36L22,67V58H40V21H160V78h0V59h18v9Z"/>
    </svg>
    <div class="number">${number}</div>
  </div>`
.trim();

export default html;
