# Built-in Value Types  



The typed objects library includes a number of value types, which represent immutable data. Type objects that represent value types can be called to perform their coercions, but they cannot be invoked with new.

The numeric value types are:

uint8, uint8Clamped : 8-bit unsigned integers
uint16 : 16-bit unsigned integers
uint32 : 32-bit unsigned integers
int8 : 8-bit signed integers
int16 : 16-bit signed integers
int32 : 32-bit signed integers
float32 : 32-bit IEEE754 floating-point numbers
float64 : 64-bit IEEE754 floating-point numbers
Each numeric value type’s coercion is the standard coercion, except for uint8Clamped, which performs a saturating coercion.

The other value types are:

boolean : ECMAScript primitive boolean
string : ECMAScript primitive string
The coercions associated with these types are the standard ECMAScript algorithms [[ToBoolean]] and [[ToString]], respectively.






