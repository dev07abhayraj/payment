
function generatePaymentLink() {
    let upiID = document.getElementById("upiID").value.trim();
    let amount = document.getElementById("amount").value.trim();

    if (!upiID || !amount) {
        alert("Please enter a valid UPI ID and amount.");
        return;
    }

    // Generate PhonePe UPI link
    let phonePeUPI = `upi://pay?pa=${upiID}&pn=YourShop&am=${amount}&cu=INR&tn=Payment`;

    // Show Payment Link
    let paymentLink = document.getElementById("paymentLink");
    paymentLink.href = phonePeUPI;
    paymentLink.style.display = "block";

    // Generate QR Code
    document.getElementById("qrCode").innerHTML = "";
    new QRCode(document.getElementById("qrCode"), {
        text: phonePeUPI,
        width: 150,
        height: 150
    });

    // // Show "I Paid" Button (Manual Confirmation)
    // let confirmButton = document.createElement("button");
    // confirmButton.onclick = function() {
    //     document.getElementById("paymentStatus").innerText = "✅ Payment Successful!";
    // };
    // document.body.appendChild(confirmButton);
}
