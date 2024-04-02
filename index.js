import inquirer from "inquirer";
async function performOperations() {
    let answers = await inquirer.prompt([
        { message: "Enter First Number", type: "number", name: "firstNumber" },
        { message: "Enter Second Number", type: "number", name: "secondNumber" },
        {
            message: "Select one number to perform operations",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        }
    ]);
    console.log(answers);
    // Condition statement
    if (answers.operator === "Addition") {
        console.log(answers.firstNumber + answers.secondNumber);
    }
    else if (answers.operator === "Subtraction") {
        console.log(answers.firstNumber - answers.secondNumber);
    }
    else if (answers.operator === "Multiplication") {
        console.log(answers.firstNumber * answers.secondNumber);
    }
    else if (answers.operator === "Division") {
        console.log(answers.firstNumber / answers.secondNumber);
    }
    else {
        console.log("Please select valid operator");
    }
}
performOperations();
