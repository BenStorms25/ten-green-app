import React from "react";
import { useSelector } from "react-redux";
import { Title_Formatter } from "./Title_Formatter";

function JustTitle() {
    const current_year = useSelector((state) => state.title_year);
    const current_measure = useSelector((state) => state.current_measure);

    return (
        <h5>{Title_Formatter(current_measure)} Score by County - {current_year}{" "}</h5>
    )
}

export default JustTitle;