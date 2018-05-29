import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, SearchTitle } from './StoresListStyles';
import StoresContainerComp from './components/storescontainer/StoresContainerComp';

const ObjectTest = {
    InfoGroup: {
        MarkerCompStyled: {letter: 'A', color: '#00ACAC'},
        imgSrc: 'store-img-1.jpg'
    },
    AdressGroup: {
        name: 'Bike & Cycle',
        adress: '34 avenue Leclerc',
        city: '92 000 Nanterre'
    },
    ScheduleGroup: [
        {day: 'Lundi', schedule: '8h - 19h'},
        {day: 'Mardi', schedule: '8h - 19h'},
        {day: 'Mercredi', schedule: '8h - 19h'},
        {day: 'Jeudi', schedule: '8h - 19h'},
        {day: 'Vendredi', schedule: '8h - 19h'},
        {day: 'Samedi', schedule: '8h - 19h'},
        {day: 'Dimanche', schedule: 'Fermé'}
    ],
    ContactGroup: {
        website: 'www.bikecycle.com',
        tel: '01 40 50 63 75'
    }
}

const StoresListComp = ({ objectProps }) => (
    <Container>
        <SearchTitle>Magasins</SearchTitle>
        {objectProps.map((el, index) => 
            <StoresContainerComp key={index} objectProps={el} />
        )}
    </Container>
);

StoresListComp.propTypes = {

}

export default StoresListComp;
