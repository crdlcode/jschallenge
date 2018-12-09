

function calc() {
    let bill = Number(document.getElementById('bill').value);
    let tax = bill * .13;
    let post_tax = bill + tax;
    let tip = post_tax * .15;
    let total_bill = post_tax + tip;

    document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
    document.getElementById("tax").innerHTML= "$"+Number(tax).toFixed(2);
    document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);
}
