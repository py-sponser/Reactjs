import navbarStyles from "./NavCss/NavBar.module.css";
import CartBtn from "./CartBtn";
import mealsImage from "../../assets/meals.jpg"

const NavBar = () => {

    return(
        <div>
            <nav className={navbarStyles.nav}>
                <h1 className={navbarStyles["animate-h1"]}>ReactMeals</h1>
                <CartBtn />
            </nav>
            <div className={navbarStyles["bg-image"]}>
                <img src={mealsImage} alt="Meals IMG"  />
            </div>
        </div>
    )
}

export default NavBar;