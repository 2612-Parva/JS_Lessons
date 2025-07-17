export function printAge(age){
    console.log(age);
}
// class and methods
class CustomerDetails{
    printFirstName(first){
        console.log(first);
    }

    printLastName(last){
        console.log(last);
    }
}

export const customerDetails= new CustomerDetails();