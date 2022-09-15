import React from 'react';

type LinkDisplayPropsType = {
    name: string
    link: string
}

export const LinkDisplay = ({name, link}:LinkDisplayPropsType) => {
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
        <p>{name}:
            <a href={linkCheck(link)} target={'_blank'} rel="noreferrer">
                {name}
            </a>
        </p>
    );
};