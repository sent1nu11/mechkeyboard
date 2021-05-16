const formatter = () => {
    let formattedValue
    return formattedValue
}


const tipCalculator = (sum, percentage, currency) => {
    let tip = percentage / 100 * sum;
    let total = sum + tip 
    console.log(`
    Sum before tip: ${currency}${sum}
    Tip percentage: ${percentage}%
    Tip:            ${currency}${tip.toFixed(2)}
    Total:          ${currency}${total.toFixed(2)}    
    `);
}






const finalTip = {
    sum: formatter(locale, currency, sum),
    percentage: percentage + "%",
    tip: formatter(locale, currency, tip),
    total: formatter(locale, currency, total)
}

tipCalculator(120,15,"$")