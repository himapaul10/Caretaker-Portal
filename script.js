$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3001/api/careteam',
        type: 'GET',
        success: function (data) {
            const parent = document.querySelector(".careteamInfo");

            for (let i = 0; i < data.length; i++) {
                const rowItem = document.createElement("tr");
                for (var key in data[i]) {
                    const child = document.createElement("td");
                    child.innerHTML = data[i][key];

                    rowItem.appendChild(child);
                }
                const profile = document.createElement("td");
                const anchorTag = document.createElement("a");
                anchorTag.setAttribute("href", "#");
                anchorTag.innerHTML = "view";
                rowItem.appendChild(anchorTag);

                parent.appendChild(rowItem);
            }
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
});

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3001/api/conditions',
        type: 'GET',
        success: function (data) {
            const parent = document.querySelector(".conditionsInfo");

            for (let i = 0; i < data.length; i++) {
                const rowItem = document.createElement("tr");
                for (var key in data[i]) {
                    const child = document.createElement("td");
                    child.innerHTML = data[i][key];

                    rowItem.appendChild(child);
                }
                parent.appendChild(rowItem);
            }
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
});

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3001/api/medication',
        type: 'GET',
        success: function (data) {
            const parent = document.querySelector(".medicationInfo");

            for (let i = 0; i < data.length; i++) {
                const rowItem = document.createElement("tr");
                for (var key in data[i]) {
                    const child = document.createElement("td");
                    child.innerHTML = data[i][key];

                    rowItem.appendChild(child);
                }
                parent.appendChild(rowItem);
            }
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
});

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:3001/api/patients',
        type: 'GET',
        success: function (data) {
            // console.log(data);
            const parent = document.querySelector(".patientInfo");

            patientDetails = [
                {
                    label: "Patient Name:",
                    attributeName: "name"
                },
                {
                    label: "DOB:",
                    attributeName: "dob"
                },
                {
                    label: "Weight (pounds)",
                    attributeName: "weight"
                }
                , {
                    label: "Height (Feet)",
                    attributeName: "height"
                },
                {
                    label: "Blood Group",
                    attributeName: "bloodgroup"
                }, {
                    label: "BMI",
                    attributeName: "bmi"
                },
                {
                    label: "Phone Number",
                    attributeName: "phone"
                }, {
                    label: "Email ID",
                    attributeName: "email"
                }
            ]

            for (var i = 0; i < patientDetails.length; i++) {
                const child = document.createElement("div");
                child.classList.add("item");
                const label = document.createElement("label");
                label.innerHTML = patientDetails[i].label;
                child.appendChild(label);
                const value = document.createElement("div");
                value.classList.add("value");
                value.innerHTML = data[0][patientDetails.at(i).attributeName];
                child.appendChild(value);
                parent.appendChild(child);
            }
        },
        error: function (error) {
            console.log('Error:', error);
        }
    });
});