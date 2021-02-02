# Backend-Assignments---School-Administration
# Project Description :

With online schooling on the rise, every school needs software to store the information of the students. New student records need to be added when admissions happen, their details updated when students pass to the next class and records need to be deleted when students leave
Details


A student record consist of following structure.

id
name
currentClass
division



The server should respond to GET, POST, PUT, DELETE request


GET request

/api/student

Inital data is provided in InitialData.js file. This data should be preloaded in server. Like
if first request to the server is get /api/student thent it should return all these student
records.

Server should send back details of all student record available in the form of array in json
format.



/api/student/{id}

Server should send back details of provided student id in json format {id:1,name: 'Lokesh',
currentClass : 12, division: 'A'}

If id is invalid respond with 404.


POST request

Request will be sent with headers {'content-type':'application/x-www-form-urlencoded'}

/api/student

Server should record the student details if all the three
[name,currentClass,division] are
provided. Should return the id to which is allocted to the new student details in json format {'id':new_id}

If incomplete deatils are given return status code 400.

Returned should be unique to every student and should be incremental.

Even if record is deleted its id should not be used.


PUT request

PUT request will have header
{'content-type':'application/x-www-form-urlencoded'}

/api/student/{id}

If valid id and valid update is given then should update the student
details

If invalid id is given then respond with status 400.

If invalid update is given then respond with status 400.

Update will be given with format {name: 'new name'}


DELETE request

/api/student/{id}

If valid id is given remove the corresponding record.

If invalid id is given respond with status 404.
