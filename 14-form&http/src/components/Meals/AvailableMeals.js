import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../ui/Card";

import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const requestSuccessHandler = (data) => {
      const loadedData = [];

      for (const key in data) {
        loadedData.push({ id: key, ...data[key] });
      }

      setMeals(loadedData);
    };

    sendRequest(
      {
        url: "https://udemy-react-3aaa3-default-rtdb.firebaseio.com/meals.json",
      },
      requestSuccessHandler
    );
  }, [sendRequest]);

  let content = <p>Loading...</p>;
  let sectionClassName = classes.mealsLoading;

  if (!isLoading && !error) {
    sectionClassName = classes.meals;

    content = meals.map((meal) => (
      <MealItem
        key={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
        id={meal.id}
      />
    ));
  }

  if (!isLoading && error) {
    sectionClassName = classes.mealsError;
    content = <p>{error}</p>;
  }

  return (
    <section className={sectionClassName}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
