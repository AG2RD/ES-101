/**
    Values are typed, not variable
        primitives: string - number - boolean - null - undefined - symbol
        reference: Object ( array - function - enum )
        natives: String - Number - Boolean - Symbol
 */
/** 
   Null
 
   wrong type detection for null
   typeof null => object - Historical error
 */
var a = null;
console.log(typeof(a));
/**
    null detection:
    Notice null is the only primitive value that is “falsy”. If it's coerced into boolean, null is converted to false. 
    => Need to add a negation operator.
 */
console.log(Boolean(a));

//  If !a is true and typeof(a) equal object => a is null
if (!a && typeof(a) === 'object') {
    console.log('a is null');
}

/**
    Undeclared - undefined
    
    Don't be confused with undeclared and undefined variable 
    An undeclared variable has however undefined type by indexOf function fallback. 
    This is a special safety guard in the behavior of typeof.
 */


/**
    Array
    
    array type doesn't exists. array type is a subtype of object.
    container for any type of value.
    
    Remarks: 
        Length of an array is dynamic. No need to set it at array creation.
        delete a slot in an array don't update length property.
*/
var demoArray = [1, 2, 3, 4, 5];
console.log(demoArray, demoArray.length);
delete(demoArray[3]);
console.log(demoArray, demoArray.length);
/**
    Tips:

        Before call a function or get value of a variable, test if there are undefined or not.

 */