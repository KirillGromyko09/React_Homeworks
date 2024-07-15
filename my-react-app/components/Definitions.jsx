import React from "react";

class Definitions extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <dl className='mt-3 ms-5 p-3 border border-primary d-inline-block'>
                {data.map(item => (
                    <React.Fragment key={item.id}>
                        <dt>{item.dt}</dt>
                        <dd>{item.dd}</dd>
                    </React.Fragment>
                ))}
            </dl>

        )
    }
}

Definitions.defaultProps = {
    data: []
}

export default Definitions
