

function calc() {
    let bill = Number(document.getElementById('bill').value);
    let tax = bill * .13;
    let postTax = bill + tax;
    let tip = postTax * .15;
    let totalBill = postTax + tip;

    document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
    document.getElementById("tax").innerHTML= "$"+Number(tax).toFixed(2);
    document.getElementById("total").innerHTML= "$"+Number(totalBill).toFixed(2);
}
