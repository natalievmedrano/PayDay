import { Form } from "react-router-dom";

const AddBudgetForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">TRACK PAYMENT</h2>
      <Form method="post" className="grid-sm">
        <div className="grid-xs">
          <label htmlFor="newPayment">Payment Name</label>
          <input
            type="text"
            name="newPayment"
            id="newPayment"
            placeholder="ex. rent,light,etc."
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="paymentAmount">Payment Amount</label>
          <input
            type="number"
            step="0.01"
            name="paymentAmount"
            id="paymentAmount"
            placeholder="enter payment amount"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="newPayment"/>
        <button type="submit" className="btn btn--dark">Add Payment</button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
