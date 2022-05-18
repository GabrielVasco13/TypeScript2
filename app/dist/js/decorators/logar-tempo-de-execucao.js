export function logarTempoDeExecução() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
