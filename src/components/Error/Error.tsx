import React from 'react';

type errorProp = {errorMessage: string};

const errorStyle = {
    color: 'red',
} as React.CSSProperties

export const Error = ({errorMessage}: errorProp) => {
    return(<div style={errorStyle} >{errorMessage}</div>)
}
