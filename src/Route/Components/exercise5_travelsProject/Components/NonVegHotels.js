import * as React from "react";
import "./VegHotels.css"
class NonVegHotels extends React.Component {
    render() {
        return (
            <div>
                <nav className="header">List of NonVeg Hotels and Restaurants</nav>
                <section className="main-container">
                    <div className="product-grid">
                        <div className="product-item">

                            <div className="product-title">
                                Kahani Cafe
                            </div>
                            <div className="product-price">
                                <div className="special-price">
                                    Rs.1999/- per person
                                </div>

                            </div>
                            <div className="product-action">
                                <a href="https://goo.gl/maps/i7B5Z66uQB815GKv6">
                                    <button className="button cart">book now</button>
                                </a>
                            </div>
                        </div>

                        <div className="product-item">

                            <div className="product-title">
                                Depth N Green
                            </div>
                            <div className="product-price">

                                <div className="special-price">
                                    Rs.899/- per person
                                </div>
                            </div>
                            <div className="product-action">
                                <a href="https://goo.gl/maps/UYdwk49CChinMZv68">
                                    <button className="button cart">book now</button>
                                </a>
                            </div>
                        </div>

                        <div className="product-item">

                            <div className="product-title">
                                Cuppa Redefined - Mysore
                            </div>
                            <div className="product-price">

                                <div className="special-price">
                                    Rs.599/- per person
                                </div>
                            </div>
                            <div className="product-action">
                                <a href="https://goo.gl/maps/i3QYfR68BRGMRmAW6">
                                    <button className="button cart">book now</button>
                                </a>
                            </div>
                        </div>

                        <div className="product-item">

                            <div className="product-item">

                                <div className="product-title">
                                    Khushi cafe
                                </div>
                                <div className="product-price">
                                    <div className="special-price">
                                        Rs.1999/- per person
                                    </div>

                                </div>
                                <div className="product-action">
                                    <a href="https://goo.gl/maps/uNtfQ2G9AxCzFjeV7">
                                        <button className="button cart">book now</button>
                                    </a>
                                </div>
                            </div>

                            {/* <div className="product-item">

                                <div className="product-title">
                                    Cafe Unplugged
                                </div>
                                <div className="product-price">
                                    <div className="special-price">
                                        Rs.1999/- per person
                                    </div>

                                </div>
                                <div className="product-action">
                                    <a href="https://goo.gl/maps/ZPAas4Su8qaqytUY6">
                                        <button className="button cart">book now</button>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default NonVegHotels