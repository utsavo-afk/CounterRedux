import { Badge, Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

// a custom hook for form
import { useField } from "./hooks";
import Notification from "./Notification";
import { NOTIFY } from "./reducers/alertReducer";
import {
  DECREMENT_COUNTER_VALUE,
  INCREMENT_COUNTER_VALUE,
  SET_COUNTER_VALUE,
} from "./reducers/counterReducer";

function App() {
  const counterState = useSelector((state) => state.counterState);
  const alertState = useSelector((state) => state.alertState);

  const { reset, ...counterVal } = useField("number");

  const dispatch = useDispatch();
  const handleSetCounter = (event) => {
    event.preventDefault();
    try {
      // !Show error on submit if input is empty
      // !Show error on submit if input value is less than 1 or greater than 6.
      if (!counterVal.value || counterVal.value < 1 || counterVal.value > 6)
        throw new Error("Please provide suitable input value for counter");
      // save value to redux store
      dispatch(SET_COUNTER_VALUE(Number(counterVal.value)));
      dispatch(NOTIFY("Counter Set", "success", 2));
      reset();
    } catch (error) {
      dispatch(NOTIFY("" + error, "warning", 2));
    }
  };

  return (
    <Container className="text-center">
      <div className="counter-center-div">
        <h1 className="lead mb-5">Counter React+Redux</h1>
        {alertState && <Notification alert={alertState} />}
        <p className="display-2">
          <Badge variant="dark" className="mb-5 text-warning p-3">
            {counterState}
          </Badge>
        </p>
        <div className="w-100 d-flex align-items-center justify-content-between">
          <Button
            onClick={() => dispatch(DECREMENT_COUNTER_VALUE())}
            variant="danger"
            className="btn-lg"
            // !If counter value is 0. We cannot decrement the value
            disabled={counterState <= 1 ? true : false}
          >
            <i className="fas fa-minus-circle fa-2x"></i>
          </Button>
          <Form onSubmit={handleSetCounter} className="d-flex flex-column">
            <Form.Control
              {...counterVal}
              placeholder="Enter a value"
              id="counterValue"
              className="mb-2 text-center"
            />

            <Button
              type="submit"
              variant="outline-primary"
              className="font-weight-bold"
            >
              Set Counter Value
            </Button>
            <Form.Text className="text-muted text-monospace">
              Input value must be &gt;1 and &lt;6
            </Form.Text>
          </Form>
          <Button
            onClick={() => dispatch(INCREMENT_COUNTER_VALUE())}
            variant="success"
            className="btn-lg"
            // !If counter value is 40. We cannot increment the value.
            disabled={counterState >= 40 ? true : false}
          >
            <i className="fas fa-plus-circle fa-2x"></i>
          </Button>
        </div>
      </div>
    </Container>
  );
}
export default App;
