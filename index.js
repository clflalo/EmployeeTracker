const inquirer = require("inquirer");
const mysql = require("mysql2/promise");



startProgram();
    
async function startProgram() {
    const {choice} = await inquirer.prompt([{
        name: "choice",
        type: "list",
        message: "What do you want to do?",
        choices: ["update role", "show employees"],
    }])
    console.log(choice);


    switch (choice) {
        case "update role":
                updateRole()
            break;

        default:
            break;
    }


    

}


async function updateRole(){
    // Create the connection
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'employeedb' })
    // query database
    const [rows, fields] = await connection.execute("select * from employee");
    
    
    console.table(rows);
}