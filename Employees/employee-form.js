
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const adhaar = document.getElementById('adhaar').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const status = document.getElementById('status').value;

    const employeeId = firstName.substring(0, 4) + phone.substring(phone.length - 4) + dob.substring(0, 4);
    alert('Employee ID: ' + employeeId);

    const employee = {
        employeeId,
        firstName,
        lastName,
        dob,
        adhaar,
        phone,
        address,
        status
    };

    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
});
