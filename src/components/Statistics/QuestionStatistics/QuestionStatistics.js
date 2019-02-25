import React, { Component } from 'react';
import { Chart } from "react-google-charts";
import "./QuestionStatistics.css"

const options = {
    // title: "Age vs. Weight comparison",
    hAxis: { title: "Answers" },
    vAxis: { title: "Count" },
    legend: "none"
};

class QuestionStatistics extends Component {
    render() {
        const { dataPoints, question } = this.props
        return (
            <div className="QuestionStatistics">
                <div className="QuestionStatistics_title"><h2>{question}</h2></div>
                <Chart className="QuestionStatistics_chart"
                    chartType="ColumnChart"
                    width="100%"
                    height="400px"
                    data={dataPoints}
                    options={options}
                />
            </div>
        )
    }
}

export default QuestionStatistics;
