import React from 'react';
import PropTypes from 'prop-types';

import './Account.css';
import wallet from './wallet.png';
// import arrowRight from './arrow-right.png';
import ModalWindow from '../ModalWindow/ModalWindow';
import {connect} from 'react-redux';
import {showModal} from '../redux/actions/showModal';



const Account = ({show, flag, total}) => {
  
  return (
    <div>
    <div className='account_wrapper'>
    <div className='wallet_wrapper'>
      <img className='wallet_img'  src={wallet} alt="wallet"/>
      <div className='wallet_box'>
      <p className='account_name'>Wallet</p>
      <div className="summ">
      <p onClick={show} className='account_summ'>{total}</p>
      <p className='currency_name'>&#8372;</p>
      </div>
      </div>
      
    </div>
   
    {/* <img className='arrow_right' src={arrowRight} alt="arrow"/> */}
    </div>
    {flag ? <ModalWindow/> : null}
    <div className="img_page"></div>
    
      
    </div>
  );
};

function mapStateToProps (state) {
  return {
    historyArr: state.historyArr,
    flag: state.showModal,
    total: state.historyArr.reduce((acc,obj) => {return obj.statusMoney ? acc+Number(obj.summ) : acc-Number(obj.summ)}, 0),
  }
}


function mapDispatchToProps (dispatch) {
return {
  show: function() {
    dispatch(showModal())
  },
}
}

Account.propTypes = {
  show: PropTypes.func,
  flag: PropTypes.bool,
  total: PropTypes.number,
  historyArr: PropTypes.arrayOf(
    PropTypes.shape({
      summ: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      categories: PropTypes.string.isRequired,
      select: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      statusMoney: PropTypes.bool.isRequired
    })
  )
};

export default connect(mapStateToProps,mapDispatchToProps) (Account);