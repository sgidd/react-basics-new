import React from 'react';

const anotherWithClass = (WrappingComponnet, classForHOC) => {
    return props => (
            <div className= {classForHOC}>
                 <WrappingComponnet  />
            </div>    
    );
}

export default anotherWithClass;