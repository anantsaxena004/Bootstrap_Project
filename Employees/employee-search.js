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

const searchInput = document.getElementById('searchInput');
const userTable = document.getElementById("userTable");
const searchButton = document.getElementById('searchButton');



async function fetchUserData(fetchUrl) {
    try {
        const response = await fetch(fetchUrl);
        if (!response.ok)
            throw new Error("Internal Server error from (employee-table.json");
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.log("Internal error: " + error);
    }
}

const tableFullData = (async () => {
    const fullData = await fetchUserData("employee-table.json");
    tableGenerator(fullData);
    return fullData;
})();




const tableGenerator = (tableData) => {
        const Newtbody = document.createElement('tbody');
        tableData.forEach((data) => {
            const tr = document.createElement('tr');
            Object.keys(data).forEach((key) => {
                const td = document.createElement('td');
                td.innerHTML = data[key];
                td.scope = "row";
                tr.appendChild(td);
            })
         
            Newtbody.appendChild(tr);
        })
        Newtbody.id = "tbody";
        const OldTbody = document.getElementById("tbody");
        userTable.replaceChild(Newtbody, OldTbody);

}





const searchResults = async (key) => {
    try {
        const tableData =
            (String(key).length == 0)
                ? (await tableFullData) : (await tableFullData)
                    .filter((data) => { return data.Key === key });
        tableGenerator(tableData);
    } catch (error) {
        console.log("Internal error: " + error);
    }
}







searchInput.addEventListener('input', async (e) => {
    await searchResults(e.target.value);
})