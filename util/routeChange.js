export const routeChange = () => {
    const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((styleElement) => {
            styleElement.removeAttribute('media');
        });
    };
    tempFix();
}