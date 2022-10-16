import React from 'react';
import s from './Contacts.module.scss';
import {ProfilePageType} from '../../../redux/profile-reducer';

type ContactsPropsType = {
    profile: ProfilePageType
}


const Contacts = ({profile}: ContactsPropsType) => {

    let links = Object.keys({...profile.contacts}).map(key => {
        return profile.contacts[key] && <div key={key}><p>{key}: <a href={profile.contacts[key]} target={'_blank'} rel="noreferrer">{key}</a></p> </div>
    })
    if(links.every((el) => el === null)){
        links = [<p key={'1'}>User has no contacts</p>]
    }
    return (
        <div className={s.contacts}>
            <h3>Contacts</h3>
            <div className={s.contactsLinks}>
                {links}
            </div>
        </div>
    );
};

export default Contacts;