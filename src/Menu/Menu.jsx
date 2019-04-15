import React from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {close} from '../redux/actions/showModal';

const Menu = ({close}) => {
  return (
    <div className='menu'>
    <NavLink onClick={close} className='menu-item' to='/accounts'>Accounts</NavLink>
    <NavLink onClick={close} className='menu-item' to='/categories'>Categories</NavLink>
    <NavLink onClick={close} className='menu-item' to='history'>History</NavLink>
    <NavLink onClick={close} className='menu-item' to='report'>Report</NavLink>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    // flag: state.showModal,
  }
}

function mapDispatchToProps (dispatch) {
  return {
 
    close: function() {
      dispatch(close())
    },
 
  }
  }

export default connect(mapStateToProps, mapDispatchToProps) (Menu);