import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const DecreaseIndentArrowIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg}>
      <path d="M896 896v128H250l163 163-90 90L6 960l317-317 90 90-163 163h646z" />
    </svg>
  ),
  displayName: 'DecreaseIndentArrowIcon',
});

export default DecreaseIndentArrowIcon;
