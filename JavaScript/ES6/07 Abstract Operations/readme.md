# Abstract Operations  

http://www.ecma-international.org/ecma-262/6.0/#sec-abstract-operations  


## 7 Abstract Operations  

7.1 Type Conversion  
    7.1.1 ToPrimitive ( input [, PreferredType] )
    7.1.2 ToBoolean ( argument )
    7.1.3 ToNumber ( argument )
    7.1.4 ToInteger ( argument )
    7.1.5 ToInt32 ( argument )
    7.1.6 ToUint32 ( argument )
    7.1.7 ToInt16 ( argument )
    7.1.8 ToUint16 ( argument )
    7.1.9 ToInt8 ( argument )
    7.1.10 ToUint8 ( argument )
    7.1.11 ToUint8Clamp ( argument )
    7.1.12 ToString ( argument )
    7.1.13 ToObject ( argument )
    7.1.14 ToPropertyKey ( argument )
    7.1.15 ToLength ( argument )
    7.1.16 CanonicalNumericIndexString ( argument )

7.2 Testing and Comparison Operations  
    7.2.1 RequireObjectCoercible ( argument )
    7.2.2 IsArray ( argument )
    7.2.3 IsCallable ( argument )
    7.2.4 IsConstructor ( argument )
    7.2.5 IsExtensible (O)
    7.2.6 IsInteger ( argument )
    7.2.7 IsPropertyKey ( argument )
    7.2.8 IsRegExp ( argument )
    7.2.9 SameValue(x, y)
    7.2.10 SameValueZero(x, y)
    7.2.11 Abstract Relational Comparison
    7.2.12 Abstract Equality Comparison
    7.2.13 Strict Equality Comparison

7.3 Operations on Objects  
    7.3.1 Get (O, P)
    7.3.2 GetV (V, P)
    7.3.3 Set (O, P, V, Throw)
    7.3.4 CreateDataProperty (O, P, V)
    7.3.5 CreateMethodProperty (O, P, V)
    7.3.6 CreateDataPropertyOrThrow (O, P, V)
    7.3.7 DefinePropertyOrThrow (O, P, desc)
    7.3.8 DeletePropertyOrThrow (O, P)
    7.3.9 GetMethod (O, P)
    7.3.10 HasProperty (O, P)
    7.3.11 HasOwnProperty (O, P)
    7.3.12 Call(F, V, [argumentsList])
    7.3.13 Construct (F, [argumentsList], [newTarget])
    7.3.14 SetIntegrityLevel (O, level)
    7.3.15 TestIntegrityLevel (O, level)
    7.3.16 CreateArrayFromList (elements)
    7.3.17 CreateListFromArrayLike (obj [, elementTypes] )
    7.3.18 Invoke(O,P, [argumentsList])
    7.3.19 OrdinaryHasInstance (C, O)
    7.3.20 SpeciesConstructor ( O, defaultConstructor )
    7.3.21 EnumerableOwnNames (O)
    7.3.22 GetFunctionRealm ( obj )

7.4 Operations on Iterator Objects  
    7.4.1 GetIterator ( obj, method )
    7.4.2 IteratorNext ( iterator, value )
    7.4.3 IteratorComplete ( iterResult )
    7.4.4 IteratorValue ( iterResult )
    7.4.5 IteratorStep ( iterator )
    7.4.6 IteratorClose( iterator, completion )
    7.4.7 CreateIterResultObject ( value, done )
    7.4.8 CreateListIterator ( list )



