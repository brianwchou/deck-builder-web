import React from 'react';

type errorProp = {errorMessage: string};

export const Error = ({errorMessage}: errorProp) => {
    return(<div>{errorMessage}</div>)
}
