const reverse = (a) => {
    let revStr = '';
    for (let i = a.length - 1; i >= 0; i--) {
        revStr += a[i];
    }
    return `\"${a}\" reversed is: \"${revStr}\"`;
}

console.log(reverse('hello how are you?'));

// Reversing a String

// Write a function, reverse that takes a string and returns another string with the characters in reverse order.

// Example:
// reverse("hello") // "olleh"
// reverse("nor") //"ron"
// reverse("codecore") // "erocedoc"

// Is it possible to modify the string itself instead of returning a copy of the original string? Why or why not?