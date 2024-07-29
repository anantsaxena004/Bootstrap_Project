const form = document.getElementById('searchForm');

form.addEventListener('submit',  function(event) {
    event.preventDefault();
   
    const employeeId = document.getElementById('employeeId').value;
 
    let employees =  JSON.parse(localStorage.getItem('employees')) || [];
    
    const employee = employees.find(emp => emp.employeeId === employeeId);
    
    if (employee) {
        document.getElementById('firstName').textContent = employee.firstName;
        document.getElementById('lastName').textContent = employee.lastName;
        document.getElementById('dob').textContent = employee.dob;
        document.getElementById('adhaar').textContent = employee.adhaar;
        document.getElementById('phone').textContent = employee.phone;
        document.getElementById('address').textContent = employee.address;
        document.getElementById('status').textContent = employee.status;
 
        document.getElementById('employeeDetails').style.display = 'block';
    } else {
        alert('Employee not found');
        document.getElementById('employeeDetails').style.display = 'none';
    }
});
