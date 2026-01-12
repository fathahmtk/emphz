// This file is used to declare modules for file types that TypeScript doesn't natively support.
// For example, you can use it to declare modules for image files, CSS files, etc.

declare module '*.glb' {
  const src: string;
  export default src;
}
