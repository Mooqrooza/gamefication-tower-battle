const html =`
<svg id="Live" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34">
  <defs>
    <filter id="filter" x="7" y="11" width="28" height="25" filterUnits="userSpaceOnUse">
      <feOffset result="offset" dy="2" in="SourceAlpha"/>
      <feGaussianBlur result="blur" stdDeviation="2.449"/>
      <feFlood result="flood" flood-opacity="0.27"/>
      <feComposite result="composite" operator="in" in2="blur"/>
      <feBlend result="blend" in="SourceGraphic"/>
    </filter>
  </defs>
  <circle cx="17" cy="17" r="15" fill="#2f83a8" />
  <circle cx="20.5" cy="20.5" r="2.5" fill="#f57248" />
  <path id="Heart" class="cls-3" d="M21.689,11A4.339,4.339,0,0,0,17.5,14.372,4.3,4.3,0,0,0,9,15.406c0,2.069,1.425,4.312,4.234,6.667a29.31,29.31,0,0,0,4.211,2.913A0.115,0.115,0,0,0,17.5,25a0.119,0.119,0,0,0,.057-0.014,29.371,29.371,0,0,0,4.21-2.913c2.81-2.355,4.234-4.6,4.234-6.667A4.365,4.365,0,0,0,21.689,11Z"
    fill="#f57248" filter="url(#filter)" />
</svg>`.trim();

export default html;
