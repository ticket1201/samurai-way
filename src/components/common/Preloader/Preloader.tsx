import React from 'react';

type PropsType = {
    onContent: boolean
}

const Preloader = ({onContent}: PropsType) => {
    const onContentStyle = onContent ? 'loader onContent': 'loader';

    return (
        <div className={'loader_wrapper'}>
            <div className={onContentStyle}></div>
        </div>
    );
};

export default Preloader;