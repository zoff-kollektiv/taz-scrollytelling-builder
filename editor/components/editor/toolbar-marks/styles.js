import css from 'styled-jsx/css';

export default css`
  .toolbar-marks {
    background-color: #444444;
    border-radius: 3px;
    color: white;
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
    z-index: 1;
  }

  .item + .item {
    border-left: 1px solid #565656;
  }
`;
