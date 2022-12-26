import { Component } from 'react';

export class StatisticsContainer extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackClick = state => {
    this.setState(prevState => {
      return {
        [state]: prevState[state] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <ul className="button-list">
          {options.map(option => (
            <li key={option}>
              <button onClick={this.onFeedbackClick}>{option}</button>
            </li>
          ))}
        </ul>
        <div className="statistics">
          <ul>
            <li>
              <p>
                Good:<span>{good}</span>
              </p>
              <p>
                Neutral:<span>{neutral}</span>
              </p>
              <p>
                Bad:<span>{bad}</span>
              </p>
              <p>
                Total:<span>0</span>
              </p>
              <p>
                Positive feedback:<span>0%</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
