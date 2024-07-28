// document.getElementById('employeeForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const phone = document.getElementById('phone').value;
//     const dob = document.getElementById('dob').value;

//     const employeeId = firstName.substring(0, 4) + phone.substring(0, 4) + dob.substring(0, 4);

//     const employeeData = {
//         firstName: firstName,
//         lastName: lastName,
//         phone: phone,
//         dob: dob,
//         employeeId: employeeId
//     };

//     let employees = JSON.parse(localStorage.getItem('employees')) || [];
//     employees.push(employeeData);
//     localStorage.setItem('employees', JSON.stringify(employees));

//     alert('Employee ID: ' + employeeId);
//     document.getElementById('employeeForm').reset();
// });


// document.getElementById('employeeForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const dob = document.getElementById('dob').value;
//     const adhaar = document.getElementById('adhaar').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const status = document.getElementById('status').value;

//     const employeeId = firstName.substring(0, 4) + phone.substring(phone.length - 4) + dob.substring(0, 4);
//     alert('Employee ID: ' + employeeId);

//     const employee = {
//         employeeId,
//         firstName,
//         lastName,
//         dob,
//         adhaar,
//         phone,
//         address,
//         status
//     };

//     fetch('employees.json')
//         .then(response => response.json())
//         .then(data => {
//             data.push(employee);
//             saveData(data);
//         })
//         .catch(() => {
//             saveData([employee]);
//         });

//     function saveData(data) {
//         const a = document.createElement('a');
//         a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
//         a.setAttribute('download', 'employees.json');
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//     }
// });


// document.getElementById('employeeForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const dob = document.getElementById('dob').value;
//     const adhaar = document.getElementById('adhaar').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const status = document.getElementById('status').value;

//     const employeeId = firstName.substring(0, 4) + phone.substring(phone.length - 4) + dob.substring(0, 4);
//     alert('Employee ID: ' + employeeId);

//     const employee = {
//         employeeId,
//         firstName,
//         lastName,
//         dob,
//         adhaar,
//         phone,
//         address,
//         status
//     };

//     fetch('employees.json')
//         .then(response => response.json())
//         .then(data => {
//             data.push(employee);
//             saveData(data);
//         })
//         .catch(() => {
//             saveData([employee]);
//         });

//     function saveData(data) {
//         const a = document.createElement('a');
//         a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
//         a.setAttribute('download', 'employees.json');
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//     }
// });



// document.getElementById('employeeForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const firstName = document.getElementById('firstName').value;
//     const lastName = document.getElementById('lastName').value;
//     const dob = document.getElementById('dob').value;
//     const adhaar = document.getElementById('adhaar').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;
//     const status = document.getElementById('status').value;

//     const employeeId = firstName.substring(0, 4) + phone.substring(phone.length - 4) + dob.substring(0, 4);
//     alert('Employee ID: ' + employeeId);

//     const employee = {
//         employeeId,
//         firstName,
//         lastName,
//         dob,
//         adhaar,
//         phone,
//         address,
//         status
//     };

//     let employees = JSON.parse(localStorage.getItem('employees')) || [];
//     employees.push(employee);
//     localStorage.setItem('employees', JSON.stringify(employees));
// });



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
