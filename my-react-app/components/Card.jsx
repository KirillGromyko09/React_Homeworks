import React from "react";

class Card extends React.Component{
    render() {
        const {text , title} = this.props;
        return <div className="card">
            <div className="card-body">
                {text && <h4 className="card-title">{title} hi </h4>}
                {text && <p className="card-text">{text} how are you?</p>}
            </div>
        </div>
    }
}
Card.defaultProps = {
    text: 'some text',
    title: 'some title'
}

export default Card;
