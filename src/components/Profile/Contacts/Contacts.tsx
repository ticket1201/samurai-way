import React from 'react';
import s from './contacts.module.scss';
import {ProfileContactsType} from '../../../redux/profile-reducer';
import {LinkDisplay} from '../../common/LinkDisplay';

type ContactsPropsType = {
    profileContacts: ProfileContactsType
}


const Contacts = ({profileContacts}: ContactsPropsType) => {
    return (
        <div className={s.contacts}>
            <h3>Contacts:</h3>
            <div className={s.contactsLinks}>
                {profileContacts.facebook && <LinkDisplay link={profileContacts.facebook} name={'Facebook'}/>}
                {profileContacts.website && <LinkDisplay link={profileContacts.website} name={'WebSite'}/>}
                {profileContacts.vk && <LinkDisplay link={profileContacts.vk} name={'VK'}/>}
                {profileContacts.twitter && <LinkDisplay link={profileContacts.twitter} name={'Twitter'}/>}
                {profileContacts.instagram && <LinkDisplay link={profileContacts.instagram} name={'Instagram'}/>}
                {profileContacts.youtube && <LinkDisplay link={profileContacts.youtube} name={'YouTube'}/>}
                {profileContacts.github && <LinkDisplay link={profileContacts.github} name={'GitHub'}/>}
                {profileContacts.mainLink && <LinkDisplay link={profileContacts.mainLink} name={'Main Link'}/>}
            </div>
        </div>
    );
};

export default Contacts;