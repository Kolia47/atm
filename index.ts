#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let YourBalance= 15000
const YourPin= 1234
const answers = await inquirer.prompt([{
    name: "PIN",
    type: "number",
    message: "Enter your PIN",
}]);
async function Fast_Withdraw (fast: any) {
    let fastAnswer = await inquirer.prompt([{
        name: "amount",
        type: "list",
        message: "Select a amount",
        choices: [1000 , 5000 , 10000 , 15000 , 20000]
    }])
    console.log(chalk.blueBright("Your selected Amount : ",fastAnswer.amount));
    if (fastAnswer.amount > YourBalance){
        console.log(chalk.red("Insufficient Funds"));
    }else {
    YourBalance-=fastAnswer.amount
    console.log(chalk.bold.greenBright("Now your balance is : " + chalk.bold(YourBalance)));
    }
    return fast
}
async function withdrawanswer (withdraw: any) {
    let withdrawanswer = await inquirer.prompt([{
        name: "Amount",
        type: "number",
        message: "How much you want to withdraw",
    }])
    console.log(chalk.blueBright("Your selected Amount : ",withdrawanswer.Amount));
    if (withdrawanswer.Amount > YourBalance){
        console.log(chalk.red("Insufficient Funds"));
    }else {
    YourBalance-=withdrawanswer.Amount
    console.log(chalk.bold.greenBright("Now your balance is : " + YourBalance));
    }
    return withdraw
}

if (answers.PIN === YourPin){
    console.log(chalk.bold.yellowBright("correct PIN"));
    let result = await inquirer.prompt([{
        name: "option",
        type: "list",
        message: "What would you like to do?",
        choices: ["Fast_Withdraw", "Withdraw", "Balance_Inquiry", "Exit"]
    }])
    if (result.option === "Fast_Withdraw") {
        Fast_Withdraw(Fast_Withdraw)
    }else if(result.option === "Withdraw") {
        withdrawanswer(withdrawanswer)
    }else if(result.option === "Balance_Inquiry") {
        console.log(chalk.greenBright(YourBalance)); 
        let answer = await inquirer.prompt([{
            name: "Any_transaction",
            type: "confirm",
            message: "Do you want to do any transaction ?",
        }])
        if (answer.Any_transaction === true) {
            let answer=await inquirer.prompt([{
                name: "question",
                type: "list",
                message: "what you want to do",
                choices: ["Fast_Withdraw","withdrawanswer"]
            }]);
            if (answer.question === "Fast_Withdraw") {
                Fast_Withdraw(Fast_Withdraw)
            }else if(answer.question === "withdrawanswer") {
                withdrawanswer(withdrawanswer)
            }
        }
    }    
}
else {
    console.log(chalk.bgRed.bold("invalid PIN"));    
};
