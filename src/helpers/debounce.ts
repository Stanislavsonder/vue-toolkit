export default function debounce(func, wait, immediate = false) {
    let timeout;
    return (...args) => {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        }, wait);
        if (immediate && !timeout) {
            func.apply(context, args);
        }
    };
}
