import './styles.scss';

const html = ({ text }) => `
  <button class="start-button" value="Готов">
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
