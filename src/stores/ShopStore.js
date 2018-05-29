import { observable, action, computed } from 'mobx';

class ShopStore {
    @observable StoresListObject = [
        {
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
        },
        {
            InfoGroup: {
                MarkerCompStyled: {letter: 'B', color: '#D0021B'},
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
    ];
}

export default new ShopStore();
