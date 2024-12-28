// Mock para ignorar advertencias de React Router
const originalWarn = console.warn;

console.warn = (...args) => {
    if (
        args[0]?.includes('React Router Future Flag Warning') ||
        args[0]?.includes('Relative route resolution within Splat routes is changing')
    ) {
        return;
    }
    originalWarn(...args);
};
