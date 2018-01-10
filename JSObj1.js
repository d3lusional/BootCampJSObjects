let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


//students.forEach(function(students){
// copy.push(students)
//});

//console.log(Object.values(students));
//console.log('Names: ' + students.name + ', cohort: ' + students.cohort);

function studentList(x){
	for(let i = 0; i < x.length; i++){
		let po = x[i]
        console.log(po)
		
    }
}

studentList(students);