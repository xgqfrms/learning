# Struct Types  




The StructType constructor defines new struct (i.e., record) type descriptors.

T = new StructType({ field1: T1, ..., fieldn: Tn })
The StructType constructor takes an object that describes the struct layout. The object is enumerated for its own properties (similar to Object.defineProperty et al). If any of the own properties has an indexed name an exception is thrown (this avoids incompatibilities in the enumeration order between engines).

A struct type T can be used as a function to create a typed struct object:

x = T({ field1: x1, ..., fieldn: xn });
The initializer argument can be left out:

x = T();
In this case the [[Initialize]] method for each field type is used to initialize the fields.

A struct type can also be used to create a typed object over an existing storage:

x = T(arrayBuffer, offset);
Typed objects of the same type created over the same array buffer at the same offsets are identical:

x = T(arrayBuffer, offset);
y = T(arrayBuffer, offset);
x === y // true
Prototypes of typed objects are derived from their types, i.e.:

x.__proto__ === T.prototype







