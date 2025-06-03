function calculateZakat() {
    const cash = parseFloat(document.getElementById('cash').value) || 0;
    const futureCash = parseFloat(document.getElementById('future_cash').value) || 0;
    const loans = parseFloat(document.getElementById('loans').value) || 0;
    const investments = parseFloat(document.getElementById('investments').value) || 0;
    const gold = parseFloat(document.getElementById('gold').value) || 0;
    const silver = parseFloat(document.getElementById('silver').value) || 0;
    const stock = parseFloat(document.getElementById('stock').value) || 0;
    const liabilities = parseFloat(document.getElementById('liabilities').value) || 0;
  
    const totalNetWorth = cash + futureCash + loans + investments + gold + silver + stock - liabilities;
  
    const nisab = parseFloat(document.querySelector('input[name="nisab"]:checked').value);
  
    let zakatPayable = 0;
    if (totalNetWorth >= nisab) {
      zakatPayable = totalNetWorth * 0.025;
    }
  
    document.getElementById('result').innerHTML = `
      <p><strong>Total Net Worth:</strong> <h2>Rs. ${totalNetWorth.toFixed(2)}</h2></p>
      <p><strong>Zakat Payable:</strong> <h2>Rs. ${zakatPayable.toFixed(2)}</h2></p>

    `;
  }
