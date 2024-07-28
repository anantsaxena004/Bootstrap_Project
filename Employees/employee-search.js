// document.getElementById('searchForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const searchId = document.getElementById('searchId').value;
//     const employees = JSON.parse(localStorage.getItem('employees')) || [];

//     const employee = employees.find(emp => emp.employeeId === searchId);

//     const detailsDiv = document.getElementById('employeeDetails');
//     detailsDiv.innerHTML = '';

//     if (employee) {
//         detailsDiv.innerHTML = `
//             <h3>Employee Details</h3>
//             <p><strong>First Name:</strong> ${employee.firstName}</p>
//             <p><strong>Last Name:</strong> ${employee.lastName}</p>
//             <p><strong>Phone Number:</strong> ${employee.phone}</p>
//             <p><strong>Date of Birth:</strong> ${employee.dob}</p>
//             <p><strong>Employee ID:</strong> ${employee.employeeId}</p>
//         `;
//     } else {
//         detailsDiv.innerHTML = `<p class="text-danger">Employee not found!</p>`;
//     }
// });



// document.getElementById('searchForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const employeeId = document.getElementById('employeeId').value;

//     fetch('employees.json')
//         .then(response => response.json())
//         .then(data => {
//             const employee = data.find(emp => emp.employeeId === employeeId);
//             if (employee) {
//                 document.getElementById('firstName').textContent = employee.firstName;
//                 document.getElementById('lastName').textContent = employee.lastName;
//                 document.getElementById('dob').textContent = employee.dob;
//                 document.getElementById('adhaar').textContent = employee.adhaar;
//                 document.getElementById('phone').textContent = employee.phone;
//                 document.getElementById('address').textContent = employee.address;
//                 document.getElementById('status').textContent = employee.status;

//                 document.getElementById('employeeDetails').style.display = 'block';
//             } else {
//                 alert('Employee not found');
//                 document.getElementById('employeeDetails').style.display = 'none';
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching employee data:', error);
//             alert('An error occurred while fetching employee data');
//         });
// });


// document.getElementById('searchForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const employeeId = document.getElementById('employeeId').value;

//     const employees = JSON.parse(localStorage.getItem('employees')) || [];
//     const employee = employees.find(emp => emp.employeeId === employeeId);
    
//     if (employee) {
//         document.getElementById('firstName').textContent = employee.firstName;
//         document.getElementById('lastName').textContent = employee.lastName;
//         document.getElementById('dob').textContent = employee.dob;
//         document.getElementById('adhaar').textContent = employee.adhaar;
//         document.getElementById('phone').textContent = employee.phone;
//         document.getElementById('address').textContent = employee.address;
//         document.getElementById('status').textContent = employee.status;

//         document.getElementById('employeeDetails').style.display = 'block';
//     } else {
//         alert('Employee not found');
//         document.getElementById('employeeDetails').style.display = 'none';
//     }
// });


document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const employeeId = document.getElementById('employeeId').value;

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
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
