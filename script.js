// ================= ADD MEDICINE =================

function addMedicine() {


    // Get values from input boxes

    let name = document.getElementById("medicineName").value;

    let dosage = document.getElementById("dosage").value;

    let time = document.getElementById("medicineTime").value;


    // Check if all fields are filled

    if (name == "" || dosage == "" || time == "") {

        alert("Please fill all the details");

        return;

    }


    // Get the medicine list

    let medicineList = document.getElementById("medicineList");


    // Create a new medicine card

    let medicine = document.createElement("div");

    medicine.className = "medicine-card";


    // Add medicine information

    medicine.innerHTML = `

        <h3>${name}</h3>

        <p>Dosage: ${dosage}</p>

        <p>Time: ${time}</p>

        <p>
            Status:
            <span class="status">Pending</span>
        </p>

        <button onclick="markTaken(this)">
            Mark as Taken
        </button>

        <button
            class="delete"
            onclick="deleteMedicine(this)"
        >
            Delete
        </button>

    `;


    // Add the medicine card to the page

    medicineList.appendChild(medicine);


    // Clear input boxes

    document.getElementById("medicineName").value = "";

    document.getElementById("dosage").value = "";

    document.getElementById("medicineTime").value = "";


    // Show message

    alert("Medicine added successfully!");

}



// ================= MARK MEDICINE AS TAKEN =================

function markTaken(button) {

    // Get the medicine card
    let medicine = button.parentElement;


    // Change Pending to Taken
    let status = medicine.querySelector(".status");

    status.innerText = "Taken";


    // Change button text
    button.innerText = "Taken";


    // Disable the button
    button.disabled = true;



    // ================= INCREASE TAKEN COUNT =================

    // Get the current number
    let takenCount = document.getElementById("takenCount");

    // Increase it by 1
    takenCount.innerText =
        Number(takenCount.innerText) + 1;



    // ================= ADD TO HISTORY =================

    // Get medicine name
    let name = medicine.querySelector("h3").innerText;


    // Get medicine time
    let time = medicine.querySelectorAll("p")[1].innerText;


    // Get history table
    let history = document.getElementById("historyTable");


    // Create a new table row
    let row = document.createElement("tr");


    // Put medicine information inside the row
    row.innerHTML =
        "<td>" + name + "</td>" +
        "<td>" + time.replace("Time: ", "") + "</td>" +
        "<td>Taken</td>";


    // Add the row to history
    history.appendChild(row);

}



 


// ================= DELETE MEDICINE =================

function deleteMedicine(button) {


    // Find the medicine card

    let medicine =
        button.parentElement;


    // Remove medicine card

    medicine.remove();

}



// ================= REMINDER =================

function reminderMessage() {

    alert("Please take your medicine on time!");

}