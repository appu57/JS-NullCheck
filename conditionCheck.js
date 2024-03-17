let check1 = false;
let check2 = new Boolean(false);  //object 

if(check1)
{
    console.log('False is assigned without constructor')
}
if(check2)  //prints below value because using constructor the variables is converted to object that is treated as truthy value so it will be true
{
    console.log("In Javascript object is considered as truthy value therefore when false is assigned using a constructor (new Boolean) an object bool2 is created which is treated as truthy value");
}
//To resolve above don't use "new" while assigning a boolean value to variable instead just use Boolean(false);