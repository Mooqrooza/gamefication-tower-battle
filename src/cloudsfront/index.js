import './styles.scss';
import { setFirstShowClassToCloudsFront } from './script';

const html = `
  <div class="clouds-front">
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="120" viewBox="0 0 240 120">
      <g>
        <path fill="#c3e9fa" opacity="0.9" fill-rule="evenodd" d="M205.716,49.492H190.182A25.755,25.755,0,0,1,182.936,100H93.886a25.769,25.769,0,1,1,0-51.538h41.553A8.239,8.239,0,0,1,139.447,33h66.269A8.246,8.246,0,1,1,205.716,49.492Z"/>
      </g>
      <g>
        <rect fill="#b2e1f5" opacity="0.98" fill-rule="evenodd" class="cls-2" x="24" y="20" width="133" height="31" rx="15.5" ry="15.5"/>
      </g>
    </svg>
  </div>
`;

export {
  html,
  setFirstShowClassToCloudsFront
}
