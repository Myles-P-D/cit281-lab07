/* 
CIT 281: Lab 07
Author: Myles Davis
 */

class CustomError extends Error 
{
    constructor(args)
    {
        super(args);
        this.message = 'Custom error';
    }
    throwGenericError()
    {
        throw new Error("Generic Error");
    }
    throwCustomError()
    {
        throw new CustomError().message;
    }
}

const myError = new CustomError();

console.log("Force Generic Error");
try
{
    console.log("Generic Error try block");
    myError.throwGenericError();
}
catch
{
    console.log("Generic Error catch block");
    console.log(myError.throwGenericError());
}
finally
{
    console.log("Generic Error finally block");
}

console.log("Force Custom Error");
try
{
    console.log("Custom Error try block");
}
catch
{
    console.log("Custom Error catch block");
    console.log(_myError.throwCustomError());
}
finally
{
    console.log("Custom Error finally block");
}