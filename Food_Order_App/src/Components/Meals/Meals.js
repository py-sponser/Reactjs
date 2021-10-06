import classes from "./MealsCss/Meals.module.css"
import Card from "../UI/Card";
import MealsForm from "./MealsForm";
const meals = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'Chicken Creep',
        description: 'Delicious...and coral...',
        price: 35.99,
    },    {
        id: 'm6',
        name: 'Grilled Meat',
        description: 'Tasty...and purple...',
        price: 18.99,
    },
];


const Meals = () => {

    return (
        <Card className={classes["meals-body"]}>
            {
                meals.slice(0).reverse().map((meal) => {
                    return (
                        <div key={meal.id} className={classes["meals-wrapper"]}>
                            <div className={classes["meals-data"]}>
                                <h3>{meal.name}</h3>
                                <span className={classes["meal-description"]}>{meal.description}</span>
                                <span className={classes["meal-price"]}>${meal.price}</span>
                            </div>
                            <MealsForm id={meal.id} meal={meal} />
                        </div>
                    )
                })
            }
        </Card>
    )
}
export default Meals;