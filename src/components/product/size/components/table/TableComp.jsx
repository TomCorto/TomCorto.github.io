import React from 'react';
import PropTypes from 'prop-types';
import { Container, HeaderTitle, Thead, Table, TD, TH, TR, THMeasure } from './TableCompStyles';

const TableComp = ({ arrayObject, headerProps }) => (
  <Container>
    <HeaderTitle>{headerProps}</HeaderTitle>
    <Table>
      <Thead>
      <tr>
        {arrayObject.thObject.map((el, index) =>
          <TH key={index}>{el}</TH>
        )}
      </tr>
      <tr>
        {arrayObject.thMeasure.map((el, index) =>
          <THMeasure key={index}>{el}</THMeasure>
        )}
      </tr>
    </Thead>
      <TR>
        {arrayObject.tdArrayXS.map((el, index) =>
          <TD key={index}>{el}</TD>
        )}
      </TR>
      <TR>
        {arrayObject.tdArrayS.map((el, index) =>
          <TD key={index}>{el}</TD>
        )}
      </TR>
      <TR>
        {arrayObject.tdArrayM.map((el, index) =>
          <TD key={index}>{el}</TD>
        )}
      </TR>
      <TR>
        {arrayObject.tdArrayL.map((el, index) =>
          <TD key={index}>{el}</TD>
        )}
      </TR>
      <TR>
        {arrayObject.tdArrayXL.map((el, index) =>
          <TD key={index}>{el}</TD>
        )}
      </TR>
      <TR>
        {arrayObject.tdArrayXXL.map((el, index) =>
          <TD key={index}>{el}</TD>
        )}
      </TR>
    </Table>
  </Container>
);

export default TableComp;

/*
{arrayObject.thObject.map((el, index) =>
  <th key={index}>{el}</th>
)}
 */

/*
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
 */
