function reverseString(string) {
  string = string.split("");
  string.reverse();
  string = string.join("");
  console.log(string);
}
reverseString("hello world");
