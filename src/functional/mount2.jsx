import { useState } from "react";

import Hello from "./mount";
function Hi() {
    var [a, seta] = useState(true);

    var chn = () => {
        seta(!a)
    }
    return (
        <>
            <button onClick={chn}>click me</button>
            {
                a ? <Hello /> : null
            }
        </>
    )
}
export default Hi;