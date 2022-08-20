function calculation() {
    //Get salary 
    const salaryField = document.getElementById('salary-field')
    const salaryAmount = salaryField.value

    //Get all Costs 
    const foodField = document.getElementById('food-cost')
    const foodCost = foodField.value

    const rentField = document.getElementById('rent-cost')
    const rentAmount = rentField.value

    const clothField = document.getElementById('cloth-cost')
    const clothCost = clothField.value





    if (isNaN(salaryAmount) == true || isNaN(foodCost) == true || isNaN(rentAmount) == true || isNaN(clothCost) == true) {

        alert('Plese Enter All field with Number')

    }
    else if (salaryAmount < 0 || rentAmount < 0 || foodCost < 0 || clothCost < 0) {
        alert('Cant give negative value or Empty field.')
    }
    else {
        const totalExpense = parseInt(foodCost) + parseInt(rentAmount) + parseInt(clothCost)
        if (totalExpense > salaryAmount) {
            alert('Expense Can\'t be more than Salary.')
        }
        else {
            //Set to total Expense
            const totalExpenseField = document.getElementById('total-expense')
            totalExpenseField.innerText = totalExpense
            //Set to Balance
            const balance = document.getElementById('minus-balance')
            const minusBalance = salaryAmount - totalExpense
            balance.innerText = minusBalance
        }
    }


}

function calculateSavings() {
    //Get the balance Amount
    const incomeText = document.getElementById('salary-field')
    const balance = incomeText.value

    //Get the saving field
    const savingField = document.getElementById('save-percent')
    const savingPercent = savingField.value
    // Calculate percentage
    const percentAge = ((savingPercent / 100) * balance)
    const balanceField = document.getElementById('minus-balance')


    if (isNaN(savingPercent) == true) {
        alert('All input must be in number')
    }
    else if (savingPercent > 100) {
        alert('Saving can\'t be more than 100%')
    }
    else if (balanceField.innerText < percentAge) {
        alert('Saving Amount Can\'t be more than lest balance')
    }

    else {
        //Set it to saving Amount
        const savingTotalField = document.getElementById('saving-amount')
        savingTotalField.innerText = percentAge
        return percentAge
    }

}