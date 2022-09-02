# IF A PARAMETER IS IN SQUARE BRACKETS `[param]`, THAT MEANS IT CAN NOT HAVE SPACES OR SEMICOLONS IN IT
# IF A PARAMETERS ARE IN CURLY BRACKETS `{1, 2, 3, 4}`, THAT MEANS YOU CAN CHOOSE ONE OF THE ITEMS IN THE LIST FOR THAT PARAMETER
# IF A FUNCTION STARTS WITH 2 HASH-TAGS, THAT MEANS IT IS A MULTILINE FUNCTION (NO SEMICOLONS!)

# PRINT [data];
- ADDED IN V0.0.2

* Javascript Code:
    `console.log(data);`
* To use:
    1. type `PRINT`, then space
    2. type what you want to log, then a semicolon
* Examples:
    `PRINT Hello_World!;`
    `END`

# ERROR [data];
- ADDED IN V0.0.3

* Javascript Code:
    `console.error(data);`
* To use:
    1. type `ERROR`, then space
    2. type what you want to error, then a semicolon
* Examples:
    `ERROR There_was_an_error!;`
    `END`

# WARN [data];
- ADDED IN V0.0.3

* Javascript Code:
    `console.warn(data);`
* To use:
    1. type `WARN`, then space
    2. type what you want to warn, then a semicolon
* Examples:
    `WARN Don't_put_spaces_in_arguments!;`
    `END`

# {CREATE, EDIT} VARIABLE [name] IS [data];
>>> - >>> - >>> ADDED IN BIG UPDATE V0.0.4

* To use:
    1. type a selection of `CREATE`, or `EDIT`, then a space:
        + CREATE - Create the variable
        + EDIT - Change the existing variable
    2. type `VARIABLE`, and a space
    3. type the name of your variable, folowed by a space again
    4. type `IS`, and space again
    5. type the data of the variable, then a semicolon
* Examples:
    `CREATE VARIABLE myVariable IS hi!;`
    `EDIT VARIABLE myVariable IS hello!;`
    `END`

# PRINT_VAR [variable_name];
>>> - >>> - >>> ADDED IN BIG UPDATE V0.0.4

* To use:
    1. type `PRINT_VAR`, and a space
    2. type the name of your variable, then a semicolon
* Examples:
    `VARIABLE myVariable IS hi! CREATE;`
    `PRINT_VAR myVariable;`
    `VARIABLE myVariable IS hello! EDIT;`
    `PRINT_VAR myVariable;`
    `END`

## IF [case] THEN: `Code here`
- COMING SOON

  * To use:
    1. type `IF`, and a space
    2. Type a variables name, then either `EQUALS` (`==` in javascript) or `NOT` (`!=` in javascript), then type another variables name.
    3. type `THEN` and a space, then the the code that you want to run if the case-statement is true