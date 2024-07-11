/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// Create an employee record from an array
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Create multiple employee records from an array of arrays
function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

// Add a timeIn event to an employee record
function createTimeInEvent(dateTime) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateTime.slice(-4)),
        date: dateTime.slice(0, 10)
    });
    return this;
}

// Add a timeOut event to an employee record
function createTimeOutEvent(dateTime) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateTime.slice(-4)),
        date: dateTime.slice(0, 10)
    });
    return this;
}

// Calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
    let timeInEvent = this.timeInEvents.find(e => e.date === date);
    let timeOutEvent = this.timeOutEvents.find(e => e.date === date);
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
}

// Calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}


// Find an employee by their first name
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}

// Calculate payroll for all employees
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
}



