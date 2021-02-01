import './styles.scss';
import { setFirstShowClassToCloudsBack } from './script';

const html = `
  <div class="clouds-back">
  <svg xmlns="http://www.w3.org/2000/svg" width="580" height="220" viewBox="0 0 580 220">
    <g>
      <path fill="#fff" opacity="0.2" fill-rule="evenodd" d="M309,120.977A34.038,34.038,0,0,1,274.946,155H160.079a34.038,34.038,0,0,1-34.054-34.023c0-.171.01-0.339,0.013-0.508H110.777a47.735,47.735,0,1,1,0-95.469h129.1a47.73,47.73,0,0,1,45.111,63.458A34.041,34.041,0,0,1,309,120.977Z"/>
    </g>
    <g>
      <path fill="#fff" opacity="0.25" fill-rule="evenodd" d="M485.531,187.644H425A8.178,8.178,0,1,1,425,204h-77.98a8.178,8.178,0,1,1,0-16.356H325.468a18.4,18.4,0,1,1,0-36.8H396.08A20.942,20.942,0,0,1,407.039,112h54.38a20.942,20.942,0,0,1,10.958,38.844h13.154A18.4,18.4,0,1,1,485.531,187.644Z"/>
    </g>
  </svg>
  </div>
`;

export {
  html,
  setFirstShowClassToCloudsBack
}
