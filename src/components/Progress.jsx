import React from "react";
class Progress extends React.Component{
    render() {
        const { percentage } = this.props;
        const width = `${percentage}%`;

        return (
            <div className="progress">
                <div className="progress-bar"
                     role="progressbar"
                     aria-valuenow={percentage}
                     aria-valuemin="0"
                     aria-valuemax="100"
                     aria-label="progressbar"
                     style={{width}}>
                </div>
            </div>
        );
    }
}


Progress.defaultProps = {
    percentage: null,
}
export default Progress;
