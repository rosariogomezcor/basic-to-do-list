console.log("Initiating the app...");
let newItem = ""; 
let list = []; 
let itemToDelete = 0; 
let indexToDelete = 0; 

while (true) {
    let input = prompt("Please select an option");
    if (input === 'quit') {
        console.log("QUITTING THE APP"); 
        break; 
    } else if (input === 'new') {
         newItem = prompt("Please add a new To-Do item");
         list.push(newItem); 
         console.log(list); 
    } else if (input === 'list') {
        if (list.length === 0) {
            console.log("There are no tasks in the To-Do List!"); 
        } else {
            console.log("****************");
            console.log(`\n Here is the list of items in your To-Do List: \n`); 
            for (let i = 0; i < list.length; i++) {
                console.log(`${ i + 1} - ${list[i]}`); 
            }
            console.log("****************");
            }
        } else if (input === 'delete') {
            itemToDelete = parseInt(prompt("Please select the number of the task you'd like to delete")); 
            indexToDelete = itemToDelete - 1; 
            list.splice(indexToDelete, 1); 
            console.log(list); 
        } else {
            alert("Your input is invalid :("); 
        }
    }