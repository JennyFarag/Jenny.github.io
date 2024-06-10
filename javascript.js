document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('appointmentForm');
    const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const service = document.getElementById('service').value;
        const expert = document.getElementById('expert').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('emailAppointment').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        // Check if any required field is empty
        if (!service || !expert || !firstName || !lastName || !email || !date || !time) {
            alert("Please fill out all required fields before booking.");
            return; 
        }

        //  random booking ID
        const bookingId = Math.floor(Math.random() * 1000000);

        document.getElementById('modalService').textContent = 'Service: ' + service;
        document.getElementById('modalExpert').textContent = 'Medical Expert: ' + expert;
        document.getElementById('modalName').textContent = 'Name: ' + firstName + ' ' + lastName;
        document.getElementById('modalEmail').textContent = 'Email: ' + email;
        document.getElementById('modalDate').textContent = 'Date: ' + date;
        document.getElementById('modalTime').textContent = 'Time: ' + time;
        document.getElementById('modalBookingId').textContent = 'Booking ID: ' + bookingId;

        
        bookingModal.show();

        // make another reservation button closes the tab to go back and book
        document.getElementById("makeAnotherReservationBtn").addEventListener("click", function() {
            bookingModal.hide();
        });
    });
});



  //Consultation
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("consultationBtn").addEventListener("click", function() {
        
        //all must be filled out 
        var fullName = document.getElementById("fullName").value.trim();
        var phoneNumber = document.getElementById("phoneNumber").value.trim();
        var email = document.getElementById("email").value.trim();

        if (fullName === "" || phoneNumber === "" || email === "") {
            alert("Please fill out all the required fields.");
            return;
        }

        var pharmacistNames = ["Dr. Joe", "Dr. Micheal", "Dr. Walter", "Dr. Kemberly", "Dr. Louis"];
        var randomIndex = Math.floor(Math.random() * pharmacistNames.length);
        var randomPharmacist = pharmacistNames[randomIndex];

        // confirmation message with pharmacist's name
        alert("Your consultation with " + randomPharmacist + " is booked! The pharmacist will contact you to schedule an appointment.");
    });
});


// Presciption 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('familyNumberForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        var familyNumber = document.getElementById('familyNumberInput').value;

        // Making sure the input is a number
        if (!/^\d+$/.test(familyNumber)) {
            alert('Please enter a valid family prescription number or personal prescription number.');
            return;
        }

        // Random numbers generated for prescriptions and medical tests
        var prescriptionCount = Math.floor(Math.random() * 11); 
        var testCount = Math.floor(Math.random() * 6); 
        
        var message = `You have had ${prescriptionCount} prescriptions with us at WellnessRx and you did ${testCount} medical tests with us.`;

    
        document.getElementById('modalBody').innerText = message;

        //  modal
        var resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
        resultModal.show();
    });
});

