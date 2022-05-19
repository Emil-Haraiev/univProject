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
    { img:berkut, format: '2D', age: '12+', name: 'Захар Беркут', rate: 5.7,
     genre: 'драма, історія, бойовик, українське', director: 'Ахтем Сеітаблаєв, Джон Вінн', date: '21 квітня - 4 травня', tech: 'Cinetech+'},
    { img:dambldor, format: '2D', age: '3D', name: 'Фантастичні звірі: Таємниці Дамблдора ', rate: 6.5,
        genre: 'пригоди, фентезі, сімейний', director: 'Девід Єйтс', date: 'з 26 травня 2022', tech: 'Cinetech+ | RE`LUX'},
    { img:moribus, format: '2D', age: '12+', name: 'Морбіус', rate: 5.1,
        genre: 'фантастика, трилер, пригоди, екшн, супергерой, Marvel', director: 'Даніель Еспіноса', date: 'з 19 травня 2022',tech: 'Cinetech+ | RE`LUX'},
    { img:sonik, format: '2D', age: '12+', name: 'Їжак Сонік 2', rate: 6.9,
        genre: 'фантастика, пригоди', director: 'Джефф Фоулер', date: 'з 26 травня 2022',tech: 'Cinetech+'},
    { img:survivor, format: '2D', age: '3D', name: 'Гаррі Гафт: той, хто вижив', rate: 6.8,
        genre: 'драма, історія, біографія', director: 'Баррі Левінсон', date: 'з 26 травня 2022',tech: 'Cinetech+'},
    { img:paliyka, format: '2D', age: '16+', name: 'Палійка ', rate: 5.1,
        genre: 'містика, трилер', director: 'Кіт Томас', date: ' 12 травня 2022',tech: 'Cinetech+ | 4DX'},
    { img:doctor, format: '2D', age: '12+', name: 'Доктор Стрендж у мультивсесвіті божевілля', rate: 7.9,
        genre: 'екшн, фантастика, Marvel, супергерой', director: 'Сем Реймі', date: 'з 16 червня 2022',tech: 'Cinetech+ | 4DX | IMAX'},
    { img:betmen, format: '2D', age: '16+', name: 'Бетмен', rate: 8,
        genre: 'екшн, бойовик, драма, кримінал, DC', director: 'Метт Рівз', date: 'з 12 травня 2022',tech: 'Cinetech+ | IMAX | 4DX | RE`LUX'}

]

const month = ['Січень','Лютий','Березень','Квітень','Травень',
    'Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
const days = ['1','2','3','4','5','6','7','8','9','10',
    '11','12','13','14','15','16','17','18','19','20',
    '21','22','23','24','25','26','27','28','29','30','31'];


export default cards;