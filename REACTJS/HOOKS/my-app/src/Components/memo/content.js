import React from 'react';
function Content({count}) {
    return(
        <div>
            <h1>Content {count}</h1>
        </div>
    )
}
export default React.memo(Content);