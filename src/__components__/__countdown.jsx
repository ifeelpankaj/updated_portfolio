import React, { useState } from 'react';

const InfiniteCountdown = () => {
    const [count, setCount] = useState(60);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => (prev > 1 ? prev - 1 : 60));
        }, 1000); // every second

        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    // Format time as 00:00:XX
    const formattedTime = `00:00:${count.toString().padStart(2, '0')}`;

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                fontSize: '1.2rem',
                color: 'var(--accent)',
                fontFamily: 'JetBrains Mono',
                fontWeight: '600'
            }}>
            {formattedTime}
        </div>
    );
};

export default InfiniteCountdown;
