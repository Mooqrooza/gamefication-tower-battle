import './styles.scss';

import { setFirstShowClassToMountains } from './script';

const html = `
  <div class="mountains">
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
      <g>
        <path fill="#84c193"  fill-rule="evenodd" d="M198.284,262s67.738,66.238,139.857,138.356c-0.863-.862-112.428.5-335.282,0.5L141.716,262A40,40,0,0,1,198.284,262Z"/>
        <path opacity="0.23" fill="#fff" fill-rule="evenodd" d="M190.811,319.655a12.988,12.988,0,0,1-2.046-10.916l-20.821,20.844a17.8,17.8,0,0,1-26.623-23.525L114.5,332.907a29.637,29.637,0,0,1-41.948,0c-0.2-.2-0.369-0.418-0.562-0.622l71.454-71.407a37.163,37.163,0,0,1,52.532,0s13.574,13.264,34.816,34.17l-25.511,25.6A9.337,9.337,0,0,1,190.811,319.655Z"/>
      </g>
      <g>
        <path fill="#56a168" fill-rule="evenodd" d="M524.284,125L799.641,400.359c0.591,0.591-520.445.5-606.782,0.5C273.816,319.9,467.716,125,467.716,125A40,40,0,0,1,524.284,125Z"/>
        <path opacity="0.13" fill="#fff" fill-rule="evenodd" d="M636.7,285.8a32.887,32.887,0,0,1-54.462-33.676l-49.63,49.533a52.621,52.621,0,0,1-84.249-13.689l-26.089,26.039a52.569,52.569,0,0,1-84.94-59.14c68.391-68.537,128.97-129.31,128.97-129.31a41.306,41.306,0,0,1,58.334,0L660.943,261.6Z"/>
        <path opacity="0.11" fill="#dbe9ef" fill-rule="evenodd" d="M526.017,125.2l38.445,38.534-74.127,74.418a34.146,34.146,0,1,1-48.2-48.384l15.87-15.933a20.4,20.4,0,0,1-31.685-9.005c24.03-24.2,39.344-39.63,39.344-39.63A42.6,42.6,0,0,1,526.017,125.2Z"/>
      </g>
    </svg>
  </div>
`;

export{
  html,
  setFirstShowClassToMountains
}
