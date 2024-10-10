// Your code here
function createEmployeeRecord([firstName,familyName,title,payPerHour,timeInEvents,timeOutEvents]){
   return{
  firstName : firstName,
  familyName: familyName,
  title : title,
  payPerHour : payPerHour ,
  timeInEvents : [] ,
  timeOutEvents : [],
   };
   
} 
function createEmployeeRecords(employtext){
    return employtext.map(createEmployeeRecord);
}
// function createTimeOutEvent(employeeRecord){
//     return employeeRecord
// }const timeOutEvent = {
//     type: 'TimeOut',
//     date:  date,
//     hour: parseInt(hour, 10),
// };

function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    // Create the time in event object
    const timeInEvent = {
        type: 'TimeIn',
        date: date,
        hour: parseInt(hour, 10),
    };

    // add new timeinevent object to the employeerecord array
    
    employeeRecord.timeInEvents.push(timeInEvent);
    // return the updated employrecord
    return employeeRecord;
}
function createTimeOutEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp.split(' ');

    // Create the time in event object
    const timeOutEvent = {
        type: 'TimeOut',
        date: date,
        hour: parseInt(hour, 10),
    };

    // add new timeinevent object to the employeerecord array
    
    employeeRecord.timeOutEvents.push(timeOutEvent);
    // return the updated employrecord
    return employeeRecord;
}
function hoursWorkedOnDate(employeeRecord, date) {
    // find the time in event of a given date
    const timeInEvent = employeeRecord.timeInEvents.find(event => event.date === date);
    // find the time out event of a given date
    const timeOutEvent = employeeRecord.timeOutEvents.find(event => event.date === date);
   // calculate the hours worked spent through subtraction
    const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100; // Convert to hours
    return hoursWorked;
}
function wagesEarnedOnDate(employeeRecord,date){
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const hourRate = employeeRecord.payPerHour;

    const wagesEarned = hoursWorked * hourRate;

    return wagesEarned;

  
}
function allWagesFor(employeeRecord){
     // mapping the timeInEvents so as to retrive all the dates
        const dates = employeeRecord.timeInEvents.map(event => event.date);
        // use reduce to iterate each date while adding up wages earned
        const totalWages = dates.reduce((total, date) => {
            return total + wagesEarnedOnDate(employeeRecord, date);
        }, 0);
        // return all the wages that were worked on all the dates
        return totalWages;
    }
    function calculatePayroll(employeeRecords){
           // use reduce to iterate each employee while adding up their pay roll
           const totalpayRoll = employeeRecords.reduce((total, employee) => {
               return total + allWagesFor (employee);
           }, 0);
           // return all the total pay roll  that were worked  by  all the employees
           return totalpayRoll;
        }
        