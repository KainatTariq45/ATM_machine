#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
//tsk 1 if elseuse ho ga -agr withdraw 50000se ziada ho ga tu wo message de ga insufficient balance
//task 2
let myBalance = 5000; //dollar
let myPin = 1234;
console.log(chalk.bgBlueBright.bold.underline("\n  KT 'ATM MACHINE'"));
//enter your pin 
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.bgYellow("\n Enter your pin(4 digits)?"),
        type: "number",
    },
]);
// pin code is correct 
if (pinAns.pin === myPin) {
    console.log(chalk.bgGreen("correct pincode!"));
    console.log(chalk.gray("\n*-------------------------------*"));
    //choose option 
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.yellow("\n choose one option"),
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    // if we select withdraw option 
    if (operationAns.operation === "withdraw") {
        //amount select 
        let withdrawNumber = await inquirer.prompt([
            {
                name: "amount",
                message: chalk.yellow("\n choose your amount:"),
                type: "list",
                choices: ["1000", "2000", "3000", "5000", "10000"]
            },
        ]);
        //amount <=5000
        if (withdrawNumber.amount <= 5000) {
            myBalance -= withdrawNumber.amount;
            console.log(chalk.green(`You withdraw ${withdrawNumber.amount}`));
            console.log(chalk.green(`The remaining amount is:  ${myBalance}`));
            console.log(chalk.gray("\n *---------------------------------------*"));
        } //amount > 5000
        else if (withdrawNumber.amount > 5000) {
            console.log(chalk.red("Insufficient balance!"));
            console.log(chalk.gray("\n **==================================**"));
        }
    }
    //if we select check balance 
    else if (operationAns.operation === "check balance") {
        console.log(chalk.green(`Total amount is:  ${myBalance}`));
        console.log(chalk.gray("\n *-----------------------------------*"));
    }
}
//if pin code is incorrect 
else {
    console.log(chalk.red("oops! Incorrect pincode"));
    console.log(chalk.gray("\n **=======================================**"));
}
