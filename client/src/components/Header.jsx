import React, {useState} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Popup from './Popup.jsx';
import CartForm from './overview/CartForm.jsx';

// import Logo from '../img/Logo.png'

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false);


  const refreshPage = () => {
    // console.log('refreshed')
    window.location.reload();
  }

  const togglePopup = (event) => {
    event.stopPropagation();
    // event.stopImmediatePropagation();
    setIsOpen(!isOpen);
  }


  return (
    <div className="header" widgetname="Header" data-testId="header">
      {isOpen && <Popup
        content={<>
          <CartForm cartnumber={props.cartNumber} onClickDeleteCart={props.onClickDeleteCart}/>
        </>}
        handleClose={togglePopup}
      />}
      <div widgetname="Header" onClick = {refreshPage} className="header-left">
        <img widgetname="Header" src={require('../img/Logo.png')} alt="Golden Fan Logo" />
      </div >
      <div onClick={togglePopup} widgetname="Header" className="header-right">
        {props.cartNumber === 0 ? null : <div className='cartNumber'> {props.cartNumber} </div>}
          <FaShoppingCart size="25"/>
      </div>
    </div>
  );
};

export default Header;