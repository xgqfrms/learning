# Ordinary and Exotic Objects Behaviours  

http://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-and-exotic-objects-behaviours  

## 9 Ordinary and Exotic Objects Behaviours  


9.1 Ordinary Object Internal Methods and Internal Slots  
    9.1.1 [[GetPrototypeOf]] ( )
    9.1.2 [[SetPrototypeOf]] (V)
    9.1.3 [[IsExtensible]] ( )
    9.1.4 [[PreventExtensions]] ( )
    9.1.5 [[GetOwnProperty]] (P)
    9.1.6 [[DefineOwnProperty]] (P, Desc)
    9.1.7 [[HasProperty]](P)
    9.1.8 [[Get]] (P, Receiver)
    9.1.9 [[Set]] ( P, V, Receiver)
    9.1.10 [[Delete]] (P)
    9.1.11 [[Enumerate]] ()
    9.1.12 [[OwnPropertyKeys]] ( )
    9.1.13 ObjectCreate(proto, internalSlotsList)
    9.1.14 OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto, internalSlotsList )
    9.1.15 GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )

9.2 ECMAScript Function Objects  
    9.2.1 [[Call]] ( thisArgument, argumentsList)
    9.2.2 [[Construct]] ( argumentsList, newTarget)
    9.2.3 FunctionAllocate (functionPrototype, strict [,functionKind] )
    9.2.4 FunctionInitialize (F, kind, ParameterList, Body, Scope)
    9.2.5 FunctionCreate (kind, ParameterList, Body, Scope, Strict, prototype)
    9.2.6 GeneratorFunctionCreate (kind, ParameterList, Body, Scope, Strict)
    9.2.7 AddRestrictedFunctionProperties ( F, realm )
    9.2.8 MakeConstructor (F, writablePrototype, prototype)
    9.2.9 MakeClassConstructor ( F)
    9.2.10 MakeMethod ( F, homeObject)
    9.2.11 SetFunctionName (F, name, prefix)
    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

9.3 Built-in Function Objects  
    9.3.1 [[Call]] ( thisArgument, argumentsList)
    9.3.2 [[Construct]] (argumentsList, newTarget)
    9.3.3 CreateBuiltinFunction(realm, steps, prototype, internalSlotsList)

9.4 Built-in Exotic Object Internal Methods and Slots  
    9.4.1 Bound Function Exotic Objects
    9.4.2 Array Exotic Objects
    9.4.3 String Exotic Objects
    9.4.4 Arguments Exotic Objects
    9.4.5 Integer Indexed Exotic Objects
    9.4.6 Module Namespace Exotic Objects

9.5 Proxy Object Internal Methods and Internal Slots  
    9.5.1 [[GetPrototypeOf]] ( )
    9.5.2 [[SetPrototypeOf]] (V)
    9.5.3 [[IsExtensible]] ( )
    9.5.4 [[PreventExtensions]] ( )
    9.5.5 [[GetOwnProperty]] (P)
    9.5.6 [[DefineOwnProperty]] (P, Desc)
    9.5.7 [[HasProperty]] (P)
    9.5.8 [[Get]] (P, Receiver)
    9.5.9 [[Set]] ( P, V, Receiver)
    9.5.10 [[Delete]] (P)
    9.5.11 [[Enumerate]] ()
    9.5.12 [[OwnPropertyKeys]] ( )
    9.5.13 [[Call]] (thisArgument, argumentsList)
    9.5.14 [[Construct]] ( argumentsList, newTarget)
    9.5.15 ProxyCreate(target, handler)