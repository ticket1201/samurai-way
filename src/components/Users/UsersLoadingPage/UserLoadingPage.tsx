import React from 'react';
import {UserLoader} from './UserLoader/UserLoader';
import {Pagination} from '../Pagination/Pagination';
import {UsersPropsType} from '../Users';

export const UserLoadingPage = (props:UsersPropsType) => {
    return (
        <>
            <UserLoader/>
            <UserLoader/>
            <UserLoader/>
            <UserLoader/>
            <Pagination pageSize={props.pageSize} onPageChanged={props.onPageChanged}
                        currentPage={props.currentPage} totalUserCount={props.totalUserCount}/>
        </>
    );
};
