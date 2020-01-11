//this is to calculate tip
function calculateTip() {
  var billAmt = document.getElementById("billamount").value;
  var serviceQual = document.getElementById("servicequality").value;
  var peopleAmt = document.getElementById("peopleamount").value;

  //to validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("digitar número");
    return;
  }

  if (peopleAmt === "" || peopleAmt <= 1) {
    peopleAmt = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // to calculate the tip
  var total = (billAmt * serviceQual) / peopleAmt;

  //to round to two places
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  // to display tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};