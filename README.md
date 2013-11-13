## Playing with Option implementation in Javascript

Loosely based on Scala `Option[T]` type. Just for fun. No more `undefined` and `null` checks :)

###Example

When something is "empty" it gets wrapped as "None"

    var empty;
    var emptyOption = jsOpt.option(empty);

    emptyOption.get() // => boom! Error('Option is None. There is nothing inside.')
    emptyOption.getOrElse("I'm default"); // => I'm default
    emptyOption.defined(); // => false
    emptyOption.empty(); // => true
    emptyOption.doWith(function(value) {
      console.log('Hi there, ', value) // will not be called
    });

To create "None" explicitly, use `jsOpt.none()`. Does the same as above, but is more explicit.


When something is defined either use `jsOpt.option(val)` or `jsOpt.some(val)` and enjoy using this value via `get`, `doWith` and `map`.

    var full = "I'm defined";
    var fullOption = jsOpt.option(full); // or jsOpt.some(full)

    fullOption.get() // => I am defined
    fullOption.getOrElse("I'm default") // => I'm defined
    fullOption.defined() // => true
    fullOption.empty() // => false

    fullOption.doWith(function(value) {
      console.log('Hi there, ', value) // => Hi there, I'm defined
    });

    var upperCaseOption = fullOption.map(function(value) {
      return value.toUpperCase();
    });
    upperCaseOption.get() // => I'M DEFINED

    var yetAnotherOption = fullOption.map(function(value) {
      return null;
    });
    upperCaseOption.defined() // => false

