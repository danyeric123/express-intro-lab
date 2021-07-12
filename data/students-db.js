export { 
	find
}

class Student{
  constructor(firstName,lastName){
    this.firstName = firstName
    this.lastName = lastName
    this._id = Math.floor(Math.random()*1000000)
  }
}

const students = [
  new Student("Blake","Romano"),
  new Student("David","Nagarpowers"),
  new Student("Cameron","Weston"),
  new Student("Damien","Rhodes"),
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, students)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}