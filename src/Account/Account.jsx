import React from 'react';
import './Account.css';
import wallet from './wallet.png';
// import arrowRight from './arrow-right.png';
// import showModal from '../redux/reducers/showModalReducer';
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

export default connect(mapStateToProps,mapDispatchToProps) (Account);