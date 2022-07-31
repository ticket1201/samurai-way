import React from 'react';
import s from './contacts.module.scss';
import {ProfileContactsType} from '../../../redux/profile-reducer';

type ContactsPropsType = {
    profileContacts: ProfileContactsType
}


const Contacts = (props: ContactsPropsType) => {

    const linkCheck = (link: string) => {
        let startArr: Array<string> = []
        for (let i = 0; i < 8; i++) {
            startArr = [...startArr, link[i]]
        }
        let startStr = startArr.join('');
        if (startStr !== 'https://') {
            return 'https://' + link
        } else {
            return link
        }
    }

    return (
        <div className={s.contacts}>
            <h3>Contacts:</h3>
            <div className={s.contactsLinks}>
                {props.profileContacts.facebook &&
                    <p>Facebook:
                        <a href={linkCheck(props.profileContacts.facebook)} target={'_blank'} rel="noreferrer">
                            Facebook
                        </a>
                    </p>
                }
                {props.profileContacts.website &&
                    <p>Website:
                        <a href={linkCheck(props.profileContacts.website)} target={'_blank'} rel="noreferrer">
                            WebSite
                        </a>
                    </p>
                }
                {props.profileContacts.vk &&
                    <p>VK:
                        <a href={linkCheck(props.profileContacts.vk)} target={'_blank'} rel="noreferrer">
                            VK
                        </a>
                    </p>
                }
                {props.profileContacts.twitter &&
                    <p>Twitter:
                        <a href={linkCheck(props.profileContacts.twitter)} target={'_blank'} rel="noreferrer">
                            Twitter
                        </a>
                    </p>
                }
                {props.profileContacts.instagram &&
                    <p>Instagram:
                        <a href={linkCheck(props.profileContacts.instagram)} target={'_blank'} rel="noreferrer">
                            Instagram
                        </a>
                    </p>
                }
                {props.profileContacts.youtube &&
                    <p>Youtube:
                        <a href={linkCheck(props.profileContacts.youtube)} target={'_blank'} rel="noreferrer">
                            YouTube
                        </a>
                    </p>
                }
                {props.profileContacts.github &&
                    <p>GitHub:
                        <a href={linkCheck(props.profileContacts.github)} target={'_blank'} rel="noreferrer">
                            GitHub
                        </a>
                    </p>
                } {props.profileContacts.mainLink &&
                <p>MainLink:
                    <a href={linkCheck(props.profileContacts.mainLink)} target={'_blank'} rel="noreferrer">
                        main link
                    </a>
                </p>
            }
            </div>
        </div>
    );
};

export default Contacts;