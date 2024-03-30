#!/usr/bin/env node
import inquirer from "inquirer";
// import Choices from "inquirer/lib/objects/choices.js";
let myBalance = 10000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin code:",
        type: "number",
    }]);
//-----------------Q1---------------//
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully!");
    let operationAns = await inquirer.prompt([{ name: "operation",
            message: "please select an option",
            type: "list",
            choices: ["withdrow amount", "check balance", "fastcash"],
        }]);
    // console.log(operationAns);
    //---------------------class work-------------//
    // if (operationAns.operation === "withdrow"){
    // let amountAns = await inquirer.prompt(
    //     [
    //         {
    //             name: "amount",
    //             message:"enter your amount",
    //             type:"number",
    //         }
    //     ]
    // );
    //  myBalance -= amountAns.amount;
    //  console.log("Your remaining balance is:" + myBalance)
    // } else if( operationAns.operation === "check balance"){
    //     console.log("yourbalace is:" + myBalance)
    // }
    // }
    // else {
    //     console.log("incorrect pin number");
    // }
    //-------------Q3--------
    // 
    if (operationAns.operation === "withdrow amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withdrow:",
                type: "number",
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            // console.log("Your remaining balance is:" + myBalance);
            console.log(`Your Remaining Balance is  ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    //----------Q4----------//
    else if (operationAns.operation === "check balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "fast_cash",
                message: "How much money you want to withdrow",
                type: "list",
                choices: ["2000", "3000", "5000"],
            }
        ]);
        let amount = parseInt(fast.fast_cash);
        if (amount <= myBalance) {
            myBalance -= amount;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else {
        console.log("Invalid Operation");
    }
}
else {
    console.log("Incorrect Pin Number, Try Again!");
}
