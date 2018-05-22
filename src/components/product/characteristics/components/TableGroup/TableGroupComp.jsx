import React from 'react';
import PropTypes from 'prop-types';

const TableGroupComp = ({ objectProps }) => (
    <TableGroupDesktop>
          <ItemsGroup>
            {characteristicsItemsObject.slice(0, 5).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
          <ItemsGroup>
            {characteristicsItemsObject.slice(6, 11).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
          <ItemsGroup>
            {characteristicsItemsObject.slice(7, -1).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
        </TableGroupDesktop>
)
