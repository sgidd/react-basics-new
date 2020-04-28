import React from 'react';

const anotherWithClass = (WrappingComponnet, classForHOC) => {
    return props => (
            <div className= {classForHOC}>
                 <WrappingComponnet  {...props} />
            </div>    
    );
}

export default anotherWithClass;