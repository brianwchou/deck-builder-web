import React from 'react';

const Container: React.FC<{name: string}> = ({name}) => {
    return (
        <div>
            {name}
        </div>
    );
}

export default Container;