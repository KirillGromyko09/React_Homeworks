import React from "react";
class Alert extends React.Component {
    render() {
        const {text , type} = this.props;
        const alertClass = `alert alert-${type}`;
        return (
            <div className={alertClass} role="alert">
                {text}
            </div>
        )
    }
}
Alert.defaultProps = {
    text: null,
    type:null
}
export default Alert;
