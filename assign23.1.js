var studentmarks = {
    'name': "fullstack",
    'instructor': {
      'name': "Aayush Sinha",
      'subject': "MERN"
    },
    'students': [{
        'name': 'vishal',
        'marks': 80,
      },
      {
        'name': 'aman',
        'marks': 89,
      },
      {
        'name': 'anil',
        'marks': 77,
      },
      {
        'name': 'rounak',
        'marks': 70,
      },
      {
       'name': 'imran',
       'marks': 90,
      },
      {
       'name': 'atif',
       'marks': 85,
      },
      {
       'name': 'akishta',
       'marks': 87,
 }
 ],
 };
  console.log(studentmarks.instructor.name);
  //console.log(studentmarks['instructor']['name']);
  console.log(studentmarks.students[5].name);


//students having marks greater than 85. 
console.log(" students Marks greater than 85");
for(var i=0; i<studentmarks.students.length; i++)
{
if(studentmarks.students[i].marks >=85)
{
console.log(studentmarks.students[i].name,studentmarks.students[i].marks);
}
}
