let info = function(firstName,lastName,age,subject){
    let temp = {};
    temp.firstName = firstName;
    temp.lastName = lastName;
    temp.age = age;
    temp.subject = subject;
    temp.introduce = function(){
    console.log(`Hello, I am ${myself.firstName}
    ${myself.lastName}.`);
    }
    temp.enrolled = function(){
    console.log(`I am enrolled in ${myself.subject}`);
    }
    return temp
    };
    let myself = info("Juan", "dela Cruz", 20)
    myself.introduce();

    myself.enrolled();

    //KITA BA YUNG CHANGES