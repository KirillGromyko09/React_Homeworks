import React from "react";

class Carousel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
        }
    }
    handleNext = () => {
        this.setState((prevState)=> ({
            currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
            }));
    }

    handlePrev = () =>{
        this.setState((prevState) => ({
            currentIndex:
                (prevState.currentIndex - 1 + this.props.images.length) %
                this.props.images.length,
        }))
    }
    render() {
        const {images} = this.props;
        const {currentIndex} = this.state;
        const currentImage = images[currentIndex];
        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <h2>Image #{currentIndex + 1}</h2>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            alt={`Slide ${currentIndex}`}
                            className="d-block w-100 img-bordered"
                            src={currentImage}
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carousel"
                    onClick={this.handlePrev}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carousel"
                    onClick={this.handleNext}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        );
    }



}
export default Carousel;
