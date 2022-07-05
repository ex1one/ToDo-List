declare module '*.scss' {
    const className: Record<string, string>;
    export default className;
}

declare module '*.png' {
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const content: any;
    export default content;
}
