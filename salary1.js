document.getElementById('calculation').addEventListener('click', function () {
    calculation()

})

document.getElementById('btn-save').addEventListener('click', function () {
    const savedBalance = calculateSavings()

    //Remaining Balance
    const reamining = document.getElementById('reamining')


    const afterCostBalance = document.getElementById('minus-balance').innerText

    const newBalance = afterCostBalance - savedBalance

    reamining.innerText = newBalance



})