import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //displays the total number of collected reviews from all categories
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // displays the percentage of positive reviews
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

  //if total is greater than 0, return the positive percentage, else 0
  return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  // updates the state when a button is clicked 
  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

render() {
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positiveFeedback = this.countPositiveFeedbackPercentage();
  const options = ["good", "neutral", "bad"];

  return (
    <div style={{backgroundColor: "peachpuff"}}>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleClick}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}/>
        ) : (
          <Notification message="There is no feedback"/>
        )}
      </Section>
    </div>
  );

  }
}


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
