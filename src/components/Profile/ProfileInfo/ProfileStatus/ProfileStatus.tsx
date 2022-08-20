import React from 'react';
//import s from './../ProfileInfo.module.scss'

class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    };

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input type="text" value={this.props.status} onBlur={this.toggleEditMode} autoFocus/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status}some</span>
                    </div>}
            </>
        )
    }
}

export default ProfileStatus