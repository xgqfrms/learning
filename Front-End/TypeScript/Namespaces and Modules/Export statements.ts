/*
Export statements 
*/

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
// 导出语句
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };









