import React, { useEffect } from 'react';

const Toast = ({ message, type = 'default', duration = 5000, showToast, setShowToast }) => {

    useEffect(() => {
        setShowToast(true);

        const timeoutId = setTimeout(() => {
            setShowToast(false);
        }, duration);

        return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
    }, [duration]);

    const toastClasses = [
        'fixed top-6 left-6 z-50 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800',
    ];

    switch (type) {
        case 'success':
            toastClasses.push('text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200');
            break;
        case 'warning':
            toastClasses.push('text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200');
            break;
        case 'error':
            toastClasses.push('text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200');
            break;
        default:
        // Default styling stays as is
    }

    return (
        <div
            id="toast-default"
            className={showToast ? toastClasses.join('') : toastClasses.join(' ') + ' hidden'} // Conditional visibility 
            role="alert"
        >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
                {type === 'success' && (
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
                    </svg>
                )}
                {type === 'warning' && (
                    <svg className="w-4 h-4 fill-current" aria-hidden="true" /* ... */>
                        {/* Warning icon */}
                    </svg>
                )}
                {type === 'error' && (
                    <svg className="w-4 h-4 fill-current" aria-hidden="true" /* ... */>
                        {/* Error icon */}
                    </svg>
                )}
            </div>
            <div className="ms-3 text-sm font-normal">{message}</div>
            <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                onClick={() => setShowToast(false)} // Manually close
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
    );
};

export default Toast;
