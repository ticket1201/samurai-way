import React, {ChangeEvent} from 'react';
//import s from './../ProfileInfo.module.scss'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

type localStateType = {
    editMode: boolean,
    statusText: string
}


class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state:localStateType = {
        editMode: false,
        statusText: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.statusText)
    }

    updateStatusHandler = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusText: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: localStateType) {
        if(prevProps.status !== this.props.status){
            this.setState({
                statusText: this.props.status
            })
        }
    }


    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input type="text" value={this.state.statusText} onBlur={this.deactivateEditMode} onChange={this.updateStatusHandler} autoFocus/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'nothing' }</span>
                    </div>}
            </>
        )
    }
}

export default ProfileStatus