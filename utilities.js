function calculation() {
    //Get salary 
    const salaryField = document.getElementById('salary-field')
    const salaryAmount = parseInt(salaryField.value)

    //Get all Costs 
    const foodField = document.getElementById('food-cost')
    const foodCost = parseInt(foodField.value)

    const rentField = document.getElementById('rent-cost')
    const rentAmount = parseInt(rentField.value)

    const clothField = document.getElementById('cloth-cost')
    const clothCost = parseInt(clothField.value)

    const totalExpense = foodCost + rentAmount + clothCost

    //Set to total Expense
    const totalExpenseField = document.getElementById('total-expense')
    totalExpenseField.innerText = totalExpense
    //Set to Balance
    const balance = document.getElementById('minus-balance')
    const minusBalance = salaryAmount - totalExpense
    balance.innerText = minusBalance


}

function calculateSavings() {
    //Get the balance Amount
    const incomeText = document.getElementById('salary-field')
    const balance = Math.round(parseInt(incomeText.value))

    //Get the saving percent amount
    const savingField = document.getElementById('save-percent')
    const savingPercent = parseInt(savingField.value)

    //Now saving amount Calculation

    // console.log((50 / 100) * 1000)
    const percentAge = ((savingPercent / 100) * balance)


    //Set it to saving Amount
    const savingTotalField = document.getElementById('saving-amount')
    savingTotalField.innerText = percentAge
    return percentAge
}