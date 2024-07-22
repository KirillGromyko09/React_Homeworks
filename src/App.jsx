import { useState } from "react";
import cn from 'classnames';
import Collapse from "./components/Collapse.jsx";

function App() {
    const text = 'collapse me';
    return (
        <div>
            <Collapse text={text} opened={false} />
        </div>
    );
}

export default App;
