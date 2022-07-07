import { v4 as uuidv4 } from 'uuid';


import berkut from './assets/berkut.jpg';
import dambldor from './assets/dambldor.jpg';
import moribus from './assets/moribus.jpg';
import sonik from './assets/sonik.jpg';
import survivor from './assets/survivor.jpg';
import paliyka from './assets/paliyka.jpg';
import doctor from './assets/Doctor-Strange.jpg';
import betmen from './assets/betmen.jpg';

const cards = [
    {
        films: [
            {img:berkut, format: '2D', age: '12+', name: 'Захар Беркут', rate: 5.7, genre: 'драма, історія, бойовик, українське', director: 'Ахтем Сеітаблаєв, Джон Вінн', date: 'Вже у прокаті!', tech: 'Cinetech+'},
            {img:dambldor, format: '2D', age: '3D', name: 'Фантастичні звірі: Таємниці Дамблдора ', rate: 6.5, genre: 'пригоди, фентезі, сімейний', director: 'Девід Єйтс', date: 'Вже у прокаті!', tech: 'RE`LUX'},
            {img:sonik, format: '2D', age: '12+', name: 'Їжак Сонік 2', rate: 6.9,
                genre: 'фантастика, пригоди', director: 'Джефф Фоулер', date: 'Вже у прокаті!',tech: 'Cinetech+'},
            { img:betmen, format: '2D', age: '16+', name: 'Бетмен', rate: 8,
                genre: 'екшн, бойовик, драма, кримінал, DC', director: 'Метт Рівз', date: 'Вже у прокаті!',tech: 'Cinetech+ | IMAX | 4DX | RE`LUX'},
            { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
                genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'Вже у прокаті!',tech: 'Cinetech+ | 4DX | IMAX'}

        ]
    },
    {
        films: [
            {img:berkut, format: '2D', age: '12+', name: 'Захар Беркут', rate: 5.7, genre: 'драма, історія, бойовик, українське', director: 'Ахтем Сеітаблаєв, Джон Вінн', date: 'Вже у прокаті!', tech: 'Cinetech+'},
            {img:dambldor, format: '2D', age: '3D', name: 'Фантастичні звірі: Таємниці Дамблдора ', rate: 6.5, genre: 'пригоди, фентезі, сімейний', director: 'Девід Єйтс', date: 'Вже у прокаті!', tech: 'RE`LUX'},
            {img:sonik, format: '2D', age: '12+', name: 'Їжак Сонік 2', rate: 6.9,
                genre: 'фантастика, пригоди', director: 'Джефф Фоулер', date: 'Вже у прокаті!',tech: 'Cinetech+'},
            { img:betmen, format: '2D', age: '16+', name: 'Бетмен', rate: 8,
                genre: 'екшн, бойовик, драма, кримінал, DC', director: 'Метт Рівз', date: 'Вже у прокаті!',tech: 'Cinetech+ | IMAX | 4DX | RE`LUX'},
            { img:moribus, format: '2D', age: '12+', name: 'Морбіус', rate: 5.1,
                genre: 'фантастика, трилер, пригоди, екшн, супергерой, Marvel', director: 'Даніель Еспіноса', date: 'Вже у прокаті!',tech: 'Cinetech+ | RE`LUX'},
        ]
    },
    {
        films: [
            { img:betmen, format: '2D', age: '16+', name: 'Бетмен', rate: 8,
                genre: 'екшн, бойовик, драма, кримінал, DC', director: 'Метт Рівз', date: 'Вже у прокаті!',tech: 'Cinetech+ | IMAX | 4DX | RE`LUX'},
            { img:moribus, format: '2D', age: '12+', name: 'Морбіус', rate: 5.1,
                genre: 'фантастика, трилер, пригоди, екшн, супергерой, Marvel', director: 'Даніель Еспіноса', date: 'Вже у прокаті!',tech: 'Cinetech+ | RE`LUX'},
            { img:survivor, format: '2D', age: '3D', name: 'Гаррі Гафт: той, хто вижив', rate: 6.8,
                genre: 'драма, історія, біографія', director: 'Баррі Левінсон', date: 'Вже у прокаті!',tech: 'Cinetech+'},
            { img:paliyka, format: '2D', age: '16+', name: 'Палійка ', rate: 5.1,
                genre: 'містика, трилер', director: 'Кіт Томас', date: ' Вже у прокаті!',tech: 'Cinetech+ | 4DX'},
            { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
                genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'Вже у прокаті!',tech: 'Cinetech+ | 4DX | IMAX'}
        ]
    },
    {
        films: [
            {img:berkut, format: '2D', age: '12+', name: 'Захар Беркут', rate: 5.7, genre: 'драма, історія, бойовик, українське', director: 'Ахтем Сеітаблаєв, Джон Вінн', date: 'Вже у прокаті!', tech: 'Cinetech+'},
            { img:paliyka, format: '2D', age: '16+', name: 'Палійка ', rate: 5.1,
                genre: 'містика, трилер', director: 'Кіт Томас', date: ' Вже у прокаті!',tech: 'Cinetech+ | 4DX'},
            { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
                genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'Вже у прокаті!',tech: 'Cinetech+ | 4DX | IMAX'},
            { img:moribus, format: '2D', age: '12+', name: 'Морбіус', rate: 5.1,
                genre: 'фантастика, трилер, пригоди, екшн, супергерой, Marvel', director: 'Даніель Еспіноса', date: 'Вже у прокаті!',tech: 'Cinetech+ | RE`LUX'}
        ]
    },
    {
        films: [
            {img:sonik, format: '2D', age: '12+', name: 'Їжак Сонік 2', rate: 6.9,
                genre: 'фантастика, пригоди', director: 'Джефф Фоулер', date: 'Вже у прокаті!',tech: 'Cinetech+'},
            { img:betmen, format: '2D', age: '16+', name: 'Бетмен', rate: 8,
                genre: 'екшн, бойовик, драма, кримінал, DC', director: 'Метт Рівз', date: 'Вже у прокаті!',tech: 'Cinetech+ | IMAX | 4DX | RE`LUX'},
            { img:moribus, format: '2D', age: '12+', name: 'Морбіус', rate: 5.1,
                genre: 'фантастика, трилер, пригоди, екшн, супергерой, Marvel', director: 'Даніель Еспіноса', date: 'Вже у прокаті!',tech: 'Cinetech+ | RE`LUX'},
            { img:survivor, format: '2D', age: '3D', name: 'Гаррі Гафт: той, хто вижив', rate: 6.8,
                genre: 'драма, історія, біографія', director: 'Баррі Левінсон', date: 'Вже у прокаті!',tech: 'Cinetech+'},
            { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
                genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'Вже у прокаті!',tech: 'Cinetech+ | 4DX | IMAX'}
        ]
    },
    {
        films: [
            {img:berkut, format: '2D', age: '12+', name: 'Захар Беркут', rate: 5.7, genre: 'драма, історія, бойовик, українське', director: 'Ахтем Сеітаблаєв, Джон Вінн', date: 'Вже у прокаті!', tech: 'Cinetech+'},
            { img:survivor, format: '2D', age: '3D', name: 'Гаррі Гафт: той, хто вижив', rate: 6.8,
                genre: 'драма, історія, біографія', director: 'Баррі Левінсон', date: 'Вже у прокаті!',tech: 'Cinetech+'},
            { img:paliyka, format: '2D', age: '16+', name: 'Палійка ', rate: 5.1,
                genre: 'містика, трилер', director: 'Кіт Томас', date: ' Вже у прокаті!',tech: 'Cinetech+ | 4DX'},
            { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
                genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'Вже у прокаті!',tech: 'Cinetech+ | 4DX | IMAX'}
        ]
    },
    {
        films: [
            {img:berkut, format: '2D', age: '12+', name: 'Захар Беркут', rate: 5.7, genre: 'драма, історія, бойовик, українське', director: 'Ахтем Сеітаблаєв, Джон Вінн', date: 'Вже у прокаті!', tech: 'Cinetech+'},
            {img:dambldor, format: '2D', age: '3D', name: 'Фантастичні звірі: Таємниці Дамблдора ', rate: 6.5, genre: 'пригоди, фентезі, сімейний', director: 'Девід Єйтс', date: 'Вже у прокаті!', tech: 'RE`LUX'},
            { img:moribus, format: '2D', age: '12+', name: 'Морбіус', rate: 5.1,
                genre: 'фантастика, трилер, пригоди, екшн, супергерой, Marvel', director: 'Даніель Еспіноса', date: 'Вже у прокаті!',tech: 'Cinetech+ | RE`LUX'},
            { img:survivor, format: '2D', age: '3D', name: 'Гаррі Гафт: той, хто вижив', rate: 6.8,
                genre: 'драма, історія, біографія', director: 'Баррі Левінсон', date: 'Вже у прокаті!',tech: 'Cinetech+'},
            { img:paliyka, format: '2D', age: '16+', name: 'Палійка ', rate: 5.1,
                genre: 'містика, трилер', director: 'Кіт Томас', date: ' Вже у прокаті!',tech: 'Cinetech+ | 4DX'},
            { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
                genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'Вже у прокаті!',tech: 'Cinetech+ | 4DX | IMAX'}
        ]
    },
    {
        films: [
            { img:moribus, format: '2D', age: '12+', name: 'Морбіус', rate: 5.1,
                genre: 'фантастика, трилер, пригоди, екшн, супергерой, Marvel', director: 'Даніель Еспіноса', date: 'Вже у прокаті!',tech: 'Cinetech+ | RE`LUX'},
            { img:survivor, format: '2D', age: '3D', name: 'Гаррі Гафт: той, хто вижив', rate: 6.8,
                genre: 'драма, історія, біографія', director: 'Баррі Левінсон', date: 'Вже у прокаті!',tech: 'Cinetech+'},
            { img:paliyka, format: '2D', age: '16+', name: 'Палійка ', rate: 5.1,
                genre: 'містика, трилер', director: 'Кіт Томас', date: ' Вже у прокаті!',tech: 'Cinetech+ | 4DX'},
            { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
                genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'Вже у прокаті!',tech: 'Cinetech+ | 4DX | IMAX'}
        ]
    },
    {
        films: [
            {img:berkut, format: '2D', age: '12+', name: 'Захар Беркут', rate: 5.7, genre: 'драма, історія, бойовик, українське', director: 'Ахтем Сеітаблаєв, Джон Вінн', date: 'Вже у прокаті!', tech: 'Cinetech+'},
            {img:dambldor, format: '2D', age: '3D', name: 'Фантастичні звірі: Таємниці Дамблдора ', rate: 6.5, genre: 'пригоди, фентезі, сімейний', director: 'Девід Єйтс', date: 'Вже у прокаті!', tech: 'RE`LUX'},
            { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
                genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'Вже у прокаті!',tech: 'Cinetech+ | 4DX | IMAX'},
            { img:paliyka, format: '2D', age: '16+', name: 'Палійка ', rate: 5.1,
                genre: 'містика, трилер', director: 'Кіт Томас', date: ' Вже у прокаті!',tech: 'Cinetech+ | 4DX'}
        ]
    }

]

const month = ['Січня','Лютого','Березня','Квітня','Травня',
    'Червня','Липня','Серпня','Вересня','Жовтня','Листопада','Грудня'];



 const vipSeating = [
    {row: 8, place:1, free: true, id: uuidv4(), price: 250},
    {row: 8, place:2, free: true, id: uuidv4(), price: 250},
    {row: 8, place:3, free: true, id: uuidv4(), price: 250},
    {row: 8, place:4, free: true, id: uuidv4(), price: 250},
    {row: 8, place:5, free: true, id: uuidv4(), price: 250},
    {row: 8, place:7, free: true, id: uuidv4(), price: 250},
    {row: 8, place:8, free: true, id: uuidv4(), price: 250},
    {row: 8, place:9, free: true, id: uuidv4(), price: 250},
    {row: 8, place:10, free: true, id: uuidv4(), price: 250},
    {row: 8, place:11, free: true, id: uuidv4(), price: 250},
    {row: 8, place:12, free: true, id: uuidv4(), price: 250},
    {row: 8, place:13, free: true, id: uuidv4(), price: 250},
    {row: 8, place:14, free: true, id: uuidv4(), price: 250},
]

export {cards, vipSeating, month}
