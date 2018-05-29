import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    MarkerCompStyled,
    ImgStore,
    AdressGroup,
    AdressStoreMobile,
    NameStore,
    ScheduleGroup,
    ScheduleList,
    ScheduleItems,
    ScheduleTableTR,
    ScheduleItemsDay,
    AdressStore,
    SpanStore,
    WebsiteLink,
    WebsiteGroup,
    WebsiteGroupMobile,
    CategoryTitle,
    InfoGroup,
    ContactGroup,
    PhoneGroup,
    PhoneGroupMobile,
    PhoneNumber,
    PraticalGroup,
    PraticalItemsGroup,
    PracticalContainer,
    PraticalIcon
} from './StoresContainerStyles';
import iconSrcItinerary from '../../../../../assets/svg/icons-itinerary.svg';
import iconsSrcPhone from '../../../../../assets/svg/icons-phone.svg';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../../../../../assets/img/', false, /\.(png|jpe?g|svg)$/));



const StoresContainerComp = ({ objectProps }) => (
    <Container>
        <InfoGroup>
            <MarkerCompStyled textProps={objectProps.InfoGroup.MarkerCompStyled.letter} colorProps={objectProps.InfoGroup.MarkerCompStyled.color} />
            <ImgStore src={images[objectProps.InfoGroup.imgSrc]} />
        </InfoGroup>
        <AdressGroup>
            <NameStore>{objectProps.AdressGroup.name}</NameStore>
            <AdressStore>
                <SpanStore>
                    {objectProps.AdressGroup.adress}<br/>
                    {objectProps.AdressGroup.city}
                </SpanStore>
            </AdressStore>
            <WebsiteGroupMobile>
                <CategoryTitle>Site Internet</CategoryTitle>
                <WebsiteLink>{objectProps.ContactGroup.website}</WebsiteLink>
            </WebsiteGroupMobile>
        </AdressGroup>
        <ScheduleGroup>
            <CategoryTitle>Horaires</CategoryTitle>
            <ScheduleList>
             {objectProps.ScheduleGroup.map((el, index) =>
                <ScheduleTableTR key={index}>
                    <ScheduleItemsDay>{el.day}</ScheduleItemsDay>
                    <ScheduleItems>{el.schedule}</ScheduleItems>
                </ScheduleTableTR>
             )}
            </ScheduleList>
        </ScheduleGroup>
        <ContactGroup>
            <WebsiteGroup>
                <CategoryTitle>Site Internet</CategoryTitle>
                <WebsiteLink>{objectProps.ContactGroup.website}</WebsiteLink>
            </WebsiteGroup>
            <PhoneGroup>
                <CategoryTitle>Téléphone</CategoryTitle>
                <PhoneNumber>{objectProps.ContactGroup.tel}</PhoneNumber>
            </PhoneGroup>
        </ContactGroup>
        <PraticalGroup>
            <PhoneGroupMobile>
                <CategoryTitle>Téléphone</CategoryTitle>
                <PhoneNumber>{objectProps.ContactGroup.tel}</PhoneNumber>
            </PhoneGroupMobile>
            <PracticalContainer>
                <CategoryTitle>Pratique</CategoryTitle>
                <PraticalItemsGroup>
                    <PraticalIcon src={iconSrcItinerary}/>
                    Itinéraire
                </PraticalItemsGroup>
                <PraticalItemsGroup>
                    <PraticalIcon src={iconsSrcPhone}/>
                    Appeller
                </PraticalItemsGroup>
            </PracticalContainer>
        </PraticalGroup>
    </Container>
);

StoresContainerComp.propTypes = {

}

export default StoresContainerComp;
