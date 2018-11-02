declare function assign <T, U> (target: T, source: U): T & U;
declare function assign <T, U, V> (target: T, source1: U, source2: V): T & U & V;
declare function assign <T, U, V, W> (target: T, source1: U, source2: V, source3: W): T & U & V & W;
declare function assign <T, U, V, W, Q> (target: T, source1: U, source2: V, source3: W, source4: Q): T & U & V & W & Q;
declare function assign (target: any, ...sources: any[]): any;

export default assign;
