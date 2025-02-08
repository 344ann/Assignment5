$(document).ready(function () {
    // Define the hourly rate
    const hourlyRate = 18;

    // Click event for the calculate button
    $('#calculateBtn').click(function () {
        let hours = parseFloat($('#hours').val());

        // Validate input to ensure it's a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a positive number for hours.");
            return;
        }

        // Calculate the total charge
        let total = hours * hourlyRate;

        // Display the total charge in the output div
        $('#totalAmount').text(total.toFixed(2));
        $('#output').show();
    });
});