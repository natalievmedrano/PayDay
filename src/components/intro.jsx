import { Form } from "react-router-dom";
import illustration from "../assets/illustration.jpg"

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Keep Track of <span className="accent"> Your Bills</span>
        </h1>
        <p>Budgeting and Tracking your bills is the key to financial freedom. Get started Today.</p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="Enter your name"
            aria-label="Your Name"
          />
          <button type="submit" className="btn btn--dark">
            <span>create account</span>
          </button>
        </Form>
      </div>
      <img src={illustration} alt="" />
    </div>
  );
};

export default Intro;
