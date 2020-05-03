const students = [
    {
      name: 'Nam',
      age: 24,
      gender: 'male',
    },
    {
      name: 'Mai',
      age: 22,
      gender: 'female',
    },
    {
      name: 'Trang',
      age: 23,
      gender: 'female',
    },
    {
      name: 'An',
      age: 20,
      gender: 'male',
    },
    {
      name: 'Thien',
      age: 27,
      gender: 'male',
    },
  ];
  countGender(students);
  function countGender(students){
      let countM = 0;
      let countF = 0;
    students.forEach(element => {
        if(element.gender=='male'){
            countM++;
        }
        if(element.gender=='female'){
            countF++;
        }
    });
    console.log("Total Female = " + countF);
    console.log("Total Male = " + countM);
  }

  const newArray = [];
  students.forEach(function(item){
    newArray.push(item.name)
  });
  console.log(newArray);
