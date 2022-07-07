import React from 'react';
import close from '../../assets/close.svg';
import './index.css';
const Modal = ({active,setActive}) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modalContent active' : 'modalContent'} onClick={event => event.stopPropagation()}>
                <img className= 'close' src={close} alt='close' onClick={() => setActive(false)} />
                <div className='modalTittle'>Шановний покупець!</div>
                <div className='modalText'>
                    Чекаємо на вас за адресою: вул. Пушкинська, 2а <br/>
                    <span className='modalSpan'>50% </span> від вартості йдуть на допомогу людям з України. <br/>
                 <div className='modalEnd'>Гарного перегляду!</div>
                </div>
                <marquee>
                    <div className="marqueeWrap">
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/320px-Flag_of_Ukraine.svg.png' alt="" className="ukraineFlag"/>
                        <div className='textMarquee'>Слава Україні!</div>
                    </div>
                </marquee>
            </div>
        </div>
    );
};

export default Modal;