import './styles.scss';

const html = ({ classIdentifer = '' }) => `
<svg class="knight-stunned ${classIdentifer}" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <g class="hend-and-sword ">
    <path fill="#a5a5a5" fill-rule="evenodd" d="M33.14,52.393c5.037,5.41,18.984,4.842,30.626-.062,2.407-1.029,8.976,8.763,3.35,12.09-7.139,4.221-18.147,4.467-26.111,1.915s-12.484-4.8-12.8-8.807c-0.059-3.79,4.65-6.059,4.935-5.137"/>
    <path fill="#816c5a" d="M33.14,52.393c2.947,3.166,8.945,4.284,15.746,3.686a85.128,85.128,0,0,1-1.2,12.24c3.208,0.351-18.045-.8-19.479-10.789-0.3-3.778,4.65-6.059,4.935-5.137"/>
    <path fill="#4c4c4c" opacity="0.16" fill-rule="evenodd" d="M66.891,64.544c-5.143,3.052-12.312,4.015-18.882,3.338-0.6.489-.251,0.658-0.849,0.6-11.865-1.422-16.009-5.647-17.822-8.019-0.946-1.238-2.11-4.056-.666-5.679,5.016,3.871,23.716,13.642,37.9.37C69.219,53.07,72.535,61.194,66.891,64.544Z"/>
    <g class="sword">
      <path fill="#bb5036" d="M8,38s-2,7,0,7S9,38,8,38Z"/>
      <path fill="#e1ebec" d="M7.611,41.24l0.474-6.576,6.569-.065L28.279,49.08l-7.043,6.641Z"/>
      <path fill="#d2dadb" d="M7.611,41.24l0.474-6.576L24.156,52.213l-2.92,3.507Z"/>
      <path fill="#f9f7ee" d="M16.884,36.865L15.858,50.38l4.219,4.245L21.17,41.544Z"/>
      <path fill="#8b705b" d="M20.056,56.014l8.63-8.164a1.1,1.1,0,1,1,1.512,1.6l-8.63,8.164A1.1,1.1,0,0,1,20.056,56.014Z"/>
      <path fill="#bb5036" d="M11,34h4l-1,9s-1.263.235-1-2A9.371,9.371,0,0,0,11,34Z"/>
      <path fill="#bb5036" opacity="0.6" d="M18,41c0.552,0,1,2.448,1,3a1,1,0,0,1-2,0C17,43.448,17.448,41,18,41Z"/>
    </g>
  </g>
  <g class="body">
    <path fill="#9c9c9c" fill-rule="evenodd" d="M66.153,47.805c6.382-4.653,16.081-2.217,21.665,5.441s4.936,17.638-1.445,22.291S70.292,77.753,64.708,70.1,59.772,52.458,66.153,47.805Z"/>
    <path fill="#909090" fill-rule="evenodd" d="M60.889,58.707c17.924,5.538,11.255-13.061,19.091-11.858C74.7,44.537,65.874,44.738,60.889,58.707Z"/>
    <path fill="#fff" fill-rule="evenodd" d="M64.8,62.342a0.607,0.607,0,0,1,.69.39,9.465,9.465,0,0,0,2.017,4.657,0.881,0.881,0,0,1-.324,1.177c-0.36.257-.864-0.375-1.165-0.742a9.687,9.687,0,0,1-1.864-5,0.682,0.682,0,0,1,.646-0.482"/>
    <path fill="#695f57" fill-rule="evenodd" d="M63.763,60.307c12.371,2.261,9.976-11.784,9.256-12.118S59.352,53.615,63.763,60.307Z"/>
  </g>
  <g class="head">
    <path fill="#969191" d="M42.977,26.511L41.1,20.123l5.891,3.541Z"/>
    <path fill="#bfbfbf" d="M40.1,20.123l2.981,4.882-1.6,1.139Z"/>
    <path fill="#a3a3a3" d="M45,22c3.513-1.827,10.74-1.006,14.706,2.995C68.912,34.28,72,31,73,33s0.9,6.882-7,10c-7.767,3.065-15.436,9.233-15.436,9.233s-5.07-.755-8.872-8.423C36.027,32.385,39.627,24.8,45,22Z"/>
    <path fill="#695f57" d="M55.546,28.581c5.194-.864,8.289,2.8,11.972,4.5,3.39,1.565,6.356.707,6.062,2.456S72.189,40.035,67,43.12c-2.059,1.223-6.356,9.012-11.388,9.82-4.956.8-10.961-3.248-11.646-7.434C42.079,34,53.249,28.962,55.546,28.581Z"/>
    <path fill="#fff" d="M41.574,28.038c0.6,0.1.9,1.255,0.673,2.572s-0.9,2.3-1.5,2.2-0.9-1.255-.673-2.572S40.975,27.935,41.574,28.038Z"/>
    <path fill="#fff" d="M40.865,34.994a1.043,1.043,0,0,1,.691.962,1.044,1.044,0,0,1-.163,1.173,1.043,1.043,0,0,1-.691-0.962A1.043,1.043,0,0,1,40.865,34.994Z"/>
    <path fill="#e5d6b9" d="M48,33c2.482-2.931,13.28-6.951,20.468,3.453,4.252,6.154,5.584,17.391-1.187,21.11s-13,.9-17.734-5.271C46.35,48.131,42.9,39.024,48,33Z"/>
    <path fill="#b08f4d" d="M64,32c-1.5,0-10,2-10,2l1,2s-8.5-2-10,7C42.444,19.8,60.5,23.5,64,32Z"/>
    <path fill="#e7c176" d="M55,19l-1,6,6-4-4,4,6-2-1,3,4,1a5.527,5.527,0,0,0-3,1c-1.778,1.592,4,4,4,4H51l3,2s-7.5-1-9,8C39.838,29.907,55,19,55,19Z"/>
    <path fill="#7c4d45" d="M55,51l11-2S55,46,55,51Z"/>
    <circle fill="#77634c" cx="50.5" cy="45.5" r="1.5"/>
    <circle fill="#f7f2e8" cx="62.5" cy="39.5" r="5.5"/>
    <circle fill="#4c776f" cx="66.5" cy="37.5" r="1.5"/>
    <path fill="#77634c" d="M47.259,43.658l5.116-1.778a1,1,0,0,1,1.365,1.462L48.624,45.12A1,1,0,1,1,47.259,43.658Z"/>
  </g>
</svg>`.trim();

export default html;
