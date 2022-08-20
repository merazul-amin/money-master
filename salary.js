document.getElementById('calculation').addEventListener('click', function () {
    calculation()

})

document.getElementById('btn-save').addEventListener('click', function () {
    const savedBalance = calculateSavings()

    //Remaining Balance
    const previousBalance = document.getElementById('minus-balance')

    const balance = parseInt(previousBalance.innerText)

    const reamainingBalance = balance - savedBalance

    const remainingField = document.getElementById('reamining')
    remainingField.innerText = reamainingBalance

})