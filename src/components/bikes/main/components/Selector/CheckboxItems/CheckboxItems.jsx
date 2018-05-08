import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

const CheckboxItems = ({checked, onClick, textProps}) => (
  <div className="SelectorItemBg">
      <span className="text-styles" onClick={onClick}>
        <input type="checkbox" checked={checked} />
        <span></span>
        {textProps}
      </span>
  </div>
);

export default CheckboxItems;
