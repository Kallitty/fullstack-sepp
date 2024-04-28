import React, { useEffect, useState } from "react";
import "./result.scss";

const Result = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        // Retrieve scores from local storage
        const storedScores =
            JSON.parse(localStorage.getItem("quizScores")) || [];
        setScores(storedScores);
    }, []);

    return (
        <div>
            <h2>Scoreboard</h2>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>
                        Score: {score.score}, Time: {score.timestamp}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Result;
