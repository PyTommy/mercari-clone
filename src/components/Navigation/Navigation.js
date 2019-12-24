import React, { Component } from 'react';
import { IoMdHome, IoMdHeart, IoIosCalendar, IoIosAddCircle, IoMdMail, IoMdContact, IoIosSearch } from "react-icons/io";
import NavItem from './hoc';

import styles from './Navigation.module.scss';


class Navigation extends Component {
    render() {
        const isAuthenticated = true;
        const HomeNav =  NavItem(IoMdHome);
        const LikesNav =  NavItem(IoMdHeart);
        const PlansNav =  NavItem(IoIosCalendar);
        const HostNav =  NavItem(IoIosAddCircle);
        const InboxNav =  NavItem(IoMdMail);
        const MyPageNav =  NavItem(IoMdContact);
        const AuthNav =  NavItem(IoMdContact);

        return (
            <header className={styles.Navigation} >
                <div className={styles.search}>
                    <input placeholder="Search"/>
                    <button><IoIosSearch className={styles.searchIcon} /></button>
                </div>
                <ul className={styles.NavigationItems}>
                    <HomeNav linkTo="/home">Home</HomeNav>
                    {
                        isAuthenticated ? (
                            <React.Fragment>
                                <LikesNav linkTo="/likes">Likes</LikesNav>
                                <PlansNav linkTo="/plans">Plans</PlansNav>
                                <HostNav linkTo="/host">Host</HostNav>
                                <InboxNav linkTo="/inbox">Inbox</InboxNav>
                                <MyPageNav linkTo="/mypage">My Page</MyPageNav>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <AuthNav linkTo="/Auth">Auth</AuthNav>
                            </React.Fragment>
                        ) 
                    }
                </ul>
            </header>
        );
    };
};

export default Navigation;