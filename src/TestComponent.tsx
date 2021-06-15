import React from 'react';
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";

type Props = {
    history: object;
}

const TestComponent = ({ history }: Props) => {
    const params = useParams()
    console.log(params)
    console.log(history);

    return (
        <div>
            
        </div>
    );
}

export default TestComponent;
