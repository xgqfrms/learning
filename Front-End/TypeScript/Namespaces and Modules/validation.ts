/*
Validation.ts
*/

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
