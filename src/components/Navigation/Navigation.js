import React from 'react';
import {connect} from 'react-redux';
import { IoMdHome, IoMdHeart, IoIosCalendar, IoIosAddCircle, IoMdMail, IoMdContact, IoIosSearch } from "react-icons/io";
import NavItem from './hoc';

import styles from './Navigation.module.scss';

const Navigation = (props) => {
    const HomeNav =  NavItem(IoMdHome);
    const LikesNav =  NavItem(IoMdHeart);
    const PlansNav =  NavItem(IoIosCalendar);
    const HostNav =  NavItem(IoIosAddCircle);
    const InboxNav =  NavItem(IoMdMail);
    const MyPageNav =  NavItem(IoMdContact);
    const AuthNav =  NavItem(IoMdContact);

    // Changing Navigations depend on isAuthentication
    const navs = props.auth.isAuthenticated ? (
        <React.Fragment>
            <LikesNav linkTo="/likes">Likes</LikesNav>
            <PlansNav linkTo="/plans">Plans</PlansNav>
            <HostNav linkTo="/host">Host</HostNav>
            <InboxNav linkTo="/inbox">Inbox</InboxNav>
            <MyPageNav linkTo="/mypage">My Page</MyPageNav>
        </React.Fragment>
    ) 
    : <AuthNav linkTo="/auth">Auth</AuthNav> ;

    return (
        <header className={styles.Navigation} >
            <div className={styles.search}>
                <input placeholder="Search"/>
                <button><IoIosSearch className={styles.searchIcon} /></button>
            </div>
            <ul className={styles.NavigationItems}>
                <HomeNav linkTo="/home">Home</HomeNav>
                { navs }
            </ul>
        </header>
    );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Navigation);