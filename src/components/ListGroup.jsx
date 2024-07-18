import React from "react";
class ListGroup extends React.Component{
    render() {
        const {children} = this.props;
        return(
            <ul className="list-group">
                {React.Children.map(children, (child , index) => {
                    if (React.isValidElement(child)){
                        return(
                    <li className ="list-group-item" key = {index}>
                {child}
                    </li>
                        )}else{
                        return null;
                    }
                })}
            </ul>
        )
    }
}
ListGroup.defaultProps = {
    children: null,
}
export default ListGroup;
