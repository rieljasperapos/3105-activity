import PromptSync from "prompt-sync";

const user = PromptSync()("Please enter name: ");
console.log(`Hello, ${user}`);