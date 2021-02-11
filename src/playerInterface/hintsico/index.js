import './styles.scss';

const html =`
<svg  class="hints-ico" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 40 40">
  <defs>
    <filter id="filter" x="4" y="6" width="33" height="33" filterUnits="userSpaceOnUse">
      <feOffset result="offset" dy="2" in="SourceAlpha"/>
      <feGaussianBlur result="blur" stdDeviation="2.449"/>
      <feFlood result="flood" flood-opacity="0.2"/>
      <feComposite result="composite" operator="in" in2="blur"/>
      <feBlend result="blend" in="SourceGraphic"/>
    </filter>
  </defs>
  <circle class="circle" cx="20" opacity="0.5" cy="19" r="16" fill="#16c5bf" />
  <circle class="flash" opacity="0" fill="#fff"  cx="20" cy="19" r="16" />
  <g class="main">
    <path d="M22.4,10.565l7.325,7.325a3.187,3.187,0,0,1,0,4.508L22.4,29.722a3.187,3.187,0,0,1-4.507,0L10.565,22.4a3.187,3.187,0,0,1,0-4.508l7.325-7.325A3.187,3.187,0,0,1,22.4,10.565Z" transform="translate(0 -1)"
      fill="#1ad0ca" filter="url(#filter)" fill-rule = "evenodd" />
    <path d="M21.079,23.123a2.415,2.415,0,0,1,.5-1.606l0.9-.887a3.421,3.421,0,0,0,1.113-2.353,2.678,2.678,0,0,0-.824-2.09,3.293,3.293,0,0,0-2.3-.748,3.374,3.374,0,0,0-2.3.755,2.622,2.622,0,0,0-.883,2.053h1.78a1.24,1.24,0,0,1,.384-0.96,1.438,1.438,0,0,1,1.014-.354,1.308,1.308,0,0,1,1,.362,1.476,1.476,0,0,1,.34,1.049,1.725,1.725,0,0,1-.293.965,7.306,7.306,0,0,1-.9.986,4.075,4.075,0,0,0-.956,1.272,4.115,4.115,0,0,0-.242,1.554h1.663Zm-1.527,2.945a0.984,0.984,0,0,0,.743.27,1,1,0,0,0,.747-0.27,0.922,0.922,0,0,0,.264-0.671,0.94,0.94,0,0,0-.271-0.689,1.139,1.139,0,0,0-1.472-.007A1.014,1.014,0,0,0,19.552,26.068Z" transform="translate(0 -1)"
      fill="#fff" fill-rule = "evenodd" />
  </g>
</svg>`.trim();

export default html;
