import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader'

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <ScaleLoader color="#d63636" />
        </div>
    );
};

export default Loading;