import React from "react";

function Card(props) {
    console.log(props);
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src="https://source.unsplash.com/400x400/?film" alt="mypic" className="card_img" />
                    <div className="card__info">
                        <span className="card__category">A Netflix Orignal Series</span>
                        <h3 className="card__title">DARK</h3>
                        <a href="https://source.unsplash.com/400x400/?film" target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;