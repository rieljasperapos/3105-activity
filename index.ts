import PromptSync from "prompt-sync";

const user = PromptSync()("Please enter name: ");
console.log(`Hello, ${user}`);

const age = PromptSync()("Please enter age: ");
console.log(`Wow, ur only ${age} years old?`);
