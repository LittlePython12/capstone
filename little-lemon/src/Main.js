import React from 'react';
import './Main.css';

function Main() {
    return (
        <main className="main">
            <div className="content">
                <div className="text">
                    <h2 width="280px" height="104px">Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned
                       Meditterranean restaurant,
                       focused on traditional
                       recipes served with a
                       modern twist.</p>
                    <button>Reserve a Table</button>
                </div>
                <div className="image">
                    <img src="https://cookingenie.com/content/wp-content/uploads/2023/03/Elevating-Your-Dish-The-Latest-Trends-in-Food-Plating.jpg" alt='' />
                </div>
            </div>
            <section className="delivery">
                <h2>ORDER FOR DELIVERY!</h2>
                <div className="delivery-buttons">
                    <button className="rounded-button">Lunch</button>
                    <button className="rounded-button">Mains</button>
                    <button className="rounded-button">Desserts</button>
                    <button className="rounded-button">A La Carte</button>
                </div>
            </section>

            <section className="menu">
                <div className="menu-item">
                    <div className="menu-details">
                        <h3>Greek Salad</h3>
                        <p>This famous Greek Salad of crispy 
                           lettuce, peppers and our Chicag...</p>
                        <p>$12.99</p>
                    </div>
                    <div className="menu-image">
                        <img src="https://www.foodnetwork.com/content/dam/images/food/fullset/2010/4/23/0/BX0204_greek-salad_s4x3.jpg" alt="Greek Salad" />
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-details">
                        <h3>Brushetta</h3>
                        <p>Our Bruschetta is made from grilled
                           bread that has been smeared  with garli...
                        </p>
                        <p>Price: $7.99</p>
                    </div>
                    <div className="menu-image">
                        <img src="https://www.lifeasastrawberry.com/wp-content/uploads/2012/11/warm-bruschetta-1.jpg" alt="Bruschetta" />
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-details">
                        <h3>Grilled Fish</h3>
                        <p>Char smoked; Seasoned with herbs and spices, it...</p>
                        <p>Price: $8.99</p>
                    </div>
                    <div className="menu-image">
                        <img src="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/desktopimages/2017-grilledfishgrilledlemons-20217-desktop.jpg?ext=.jpg" alt="Grilled Fish with lemon" />
                    </div>
                </div>
            </section>

            <section className="reservation">
                <h2>Find your table</h2>
                <form>
                    <div className="form-group">
                        <label>Date:</label>
                        <input type="date" required />
                    </div>
                    <div className="form-group">
                        <label>Time:</label>
                        <input type="time" required />
                    </div>
                    <div className="form-group">
                        <label>Number of guests:</label>
                        <input type="number" required />
                    </div>

                    <h3>Seating Preference:</h3>
                    <div className="seating-options">
                        <label>
                            <input type="radio" name="seating" value="Inside" /> Inside
                        </label>
                        <label>
                            <input type="radio" name="seating" value="Event Zone" /> Event Zone
                        </label>
                        <label>
                            <input type="radio" name="seating" value="Outside" /> Outside
                        </label>
                    </div>

                    <button className="place-order-button">Place Order</button>
                </form>
            </section>
        </main>
    );
};

export default Main;