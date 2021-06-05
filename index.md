# CIT 281 lab 07

## Outcome:

This lab created the CIT minor GitHub organization.   
We started by joinging GitHub and crating an organization for the minor.   
We then cloned a repository to our local system and experimented with errors.   
We leanred ho to throw errors and custom errors and create try blocks.   
Finally we pushed our commits to GitHub.
     
**[lab 07 Repo](https://github.com/UO-CIT-Myles-P-D/cit281-lab07)**    

     
## Code:     
     
**[Here](https://github.com/Myles-P-D/cit281-lab07/blob/main/lab-07.js)** is a link to the full error code and below is an excerpt from this lab.     
     
```javascript
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
```
## Images:      
     
Here is an image of the commits pushed to GitHub.     
     
![GitHub push](https://github.com/Myles-P-D/cit281-lab07/blob/main/lab-07.png?raw=true "GitHub push")



