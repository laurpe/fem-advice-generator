import React, { useState } from "react";
import AdviceContainer from "./components/AdviceContainer";

const App = () => {
    const [advice, setAdvice] = useState("");

    const handleClick = async () => {
        const advice = await fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => data.slip.advice);
        setAdvice(advice);
    };

    return <AdviceContainer advice={advice} handleClick={handleClick} />;
};

export default App;
