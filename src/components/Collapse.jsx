import React from "react";
import classNames from 'classnames';

class Collapse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            opened: props.opened,
        }
    }
    handleClick = (e) => {
        e.preventDefault()
        this.setState((prevState) => ({
            opened : !prevState.opened
        }))
    };
    render() {
        const {text} = this.props;
        const {opened} = this.state;

        return(
            <div>
                <p>
                    <a className="btn btn-primary"
                       data-bs-toggle="collapse"
                       href="#"
                       role="button"
                       aria-expanded={opened}
                       onClick={this.handleClick}>
                        Link with href
                    </a>
                </p>
                {text &&(
                <div className={classNames('collapse' , { show : opened})}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
                )}
            </div>
        );
    }
}
Collapse.defaultProps = {
    text:null,
    opened: true,
};
export default Collapse;
