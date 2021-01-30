import './styles.scss';

const html = ({ text, classIdentifiers }) => `
  <button class="main-button ${classIdentifiers}" value="Готов">
    <span class="ico">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path d="M4,10l5,5,8-9" fill='none' stroke-width="2" stroke='#21a49f'/>
      </svg>
    </span>
    <span class="text">${text}</span>
    <div class="lines">
      <div>
        <div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </button>
`;

export default html;
