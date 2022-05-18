export function logarTempoDeExecução() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        return descriptor;
    }
}