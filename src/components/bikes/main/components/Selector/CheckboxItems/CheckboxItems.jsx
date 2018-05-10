import React from 'react';
import PropTypes from 'prop-types';
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

CheckboxItems.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  textProps: PropTypes.string
}

export default CheckboxItems;
