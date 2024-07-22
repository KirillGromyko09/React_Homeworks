import React from "react";
import classNames from 'classnames';

class BtnGroup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeButton: '',
        }
    }

    handleClick = (e) => {
        const buttonName = e.target.textContent
        this.setState({activeButton:buttonName})
    }
    render() {
        const {activeButton} = this.state;
        return (
            <div className="btn-group" role="group">
                <button type="button"
                        className= {classNames({'active' : activeButton === 'Left'}, "btn btn-secondary left")}
                 onClick={this.handleClick}>
                    Left
                </button>
                <button type="button"
                        className={classNames({'active' : activeButton === 'Right'} , "btn btn-secondary right")}
                 onClick={this.handleClick}>
                    Right
                </button>
            </div>
        )
    }
}
BtnGroup.defaultProps = {
    props:null,
}
export default BtnGroup;
