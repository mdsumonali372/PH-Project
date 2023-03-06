function foo() {
  var foo = "foo";
  console.log(foo);
  bar();
}

foo();

function bar() {
  var bar = "bar";
  console.log(bar);
  // foo();
}
