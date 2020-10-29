
## About The Project
Methods ! here we gonna study how to build functions with or without parameters. those function will or will not return something.

## Exercices
#### Without parameters
1. Create a function which return the date and time of today

    the format should be: Monday 2 september 2020, 3:30pm

2. Create a function which return the device used

    example:
    - func() == 'MAC OS X'

#### With one parameter
1. Create a function which take a number as parameters and return and return 'true' if it is a pair number and 'false' when it is odd 

    example:
    - func(5) == false; func(6) == true

2. Create a function which take a number as parameters and return PI number round to the first parameter

    example:
    - func(5) == 3.14159

3. Create a function which take a string as parameters and return the inverse string

    example:
    - func('javascript') == 'tpircsavaj';

4. Create a function which take a string as parameters and return the length of character

    example:
    - func('javascript') == 10;

5. Create a function which take an array as parameters and return the length

    example:
    - func(['Hello', 'world!']) == 2;

6. Create a function which take a string as parameters and return an array of the string cut

    example:
    - func('Hello world!') == ['Hello', 'world!'];

7. Create a function which take a string as parameters and return an object

    example:
    - func('Hello world!') == 
          ```
          {
            words: [
              'Hello',
              'World!'
            ],
            total_count: 2
          };
          ```

#### With two parameters
1. Create a function which will return true or false if the second parameter appear in the first parameters

    example:
    - func('hello world!', 'world') == true;

2. Create a function which will remove the second parameters string from the first parameters string

    example:
    - func('hello world!', 'world') == 'hello !';

3. Create a function which take an array as first parameter and a string a second parameters, and the function will return an array ordered alphabetically

    requirements:
    - the second parameter can be 'asc' or 'desc' only
    - if 'asc' is choose, the array returned is ordered A -> Z
    - if 'desc' is choose, the array returned is ordered Z -> A
    - I should be able to call this func without the second parameters, and it still sort the aray alphabetically.

    example:
    - func(['b', 'c', 'a']) == ['a', 'b', 'c'];
    - func(['b', 'c', 'a'], 'asc') == ['a', 'b', 'c'];

## Requirements
- 5 functions per file maximum
- Do not overcross 80 columns
- Functions name and params should clearly, without ambiguity indicate what the function does.
- Functions and variable name should be in lower camel case
- Be careful method with parameters need verification ;)

## Bonus
- Be able to use those scripts from an HTML views