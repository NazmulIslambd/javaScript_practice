const student=[
    {
        name:'Nazmul',
        id:100,
        department:"eee"
    },
    {
        name:'Akbar',
        id:101,
        department:'eee'
    },
    {
        name:'ali',
        id:102,
        department:'mp'
    },
    {
        name:'Abdullah',
        id:103,
        department:'cse'
    },
];



function studentInformation(student){
    let singleStudent='';
    
    for (let index = 0; index < student.length; index++) {
        
        singleStudent += `
        name -${student[index].name}
        id -${student[index].id}
        depatment -${student[index].department}

        ` ;
        
    }
    return singleStudent;
    
};

const reciveStudentInfo1=studentInformation(student);

console.log(reciveStudentInfo1);

let num1=1;
num1+=1;
console.log(num1)

