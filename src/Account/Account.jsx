import React from 'react';
import './Account.css';
import wallet from './wallet.png';
import arrowRight from './arrow-right.png';
// import showModal from '../redux/reducers/showModalReducer';
import ModalWindow from '../ModalWindow/ModalWindow';
import {connect} from 'react-redux';
import {showModal} from '../redux/actions/showModal';



const Account = ({show, flag, totalSumm}) => {
  
  return (
    <div>
    <div className='account_wrapper'>
    <div className='wallet_wrapper'>
      <img className='wallet_img'  src={wallet} alt="wallet"/>
      <div className='wallet_box'>
      <p className='account_name'>Гаманець</p>
      <div className="summ">
      <p onClick={show} className='account_summ'>{totalSumm}</p>
      <p className='currency_name'>грн</p>
      </div>
      </div>
      
    </div>
   
    <img className='arrow_right' src={arrowRight} alt="arrow"/>
    </div>
    {flag ? <ModalWindow/> : null}
    <div className="img_page"></div>
    
      
    </div>
  );
};

function mapStateToProps (state) {
  return {
    flag: state.showModal,
    totalSumm: state.totalSumm,
    // historyArr: state.historyArr,
  }
}


function mapDispatchToProps (dispatch) {
return {
  show: function() {
    dispatch(showModal())
  },
}
}

export default connect(mapStateToProps,mapDispatchToProps) (Account);