import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealsItemForm = (props) => {
  const [amountIsValid, setamountIsValid] = useState(false);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmout = amountInputRef.current.value;
    const enteredAmoutNumber = +enteredAmout;

    if (
      enteredAmout.trim().length === 0 ||
      enteredAmoutNumber < 1 ||
      enteredAmoutNumber > 5
    ) {
      setamountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmoutNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealsItemForm;
