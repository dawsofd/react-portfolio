const reportWebVitals = (onLanding) => {
    if (onLanding && onLanding instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(onLanding);
            getFID(onLanding);
            getFCP(onLanding);
            getLCP(onLanding);
            getTTFB(onLanding);
        });
    }
};

export default reportWebVitals;