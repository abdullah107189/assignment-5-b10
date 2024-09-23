const getInnerTextToValue = (id) => {
    const value = document.getElementById(id).innerText;
    return parseFloat(value);
}
const getInputToValue = (id) => {
    const values = document.getElementById(id).value;
    return parseFloat(values);
}
let mainTk = getInnerTextToValue('mainTk')
let modal = document.getElementById('my_modal_1')

// noakhali section
const noakhaliBtn = document.getElementById('noakhaliBtn')
noakhaliBtn.addEventListener('click', () => {
    const noakhaliDonatedTk = getInnerTextToValue('noakhaliDonateTk')
    const noakhaliInputTk = getInputToValue('noakhaliInputFeild')
    if (noakhaliInputTk > mainTk) {
        return alert('sorry not enough you TK')
    }
    if (isNaN(noakhaliInputTk) || typeof (noakhaliInputTk) === false || noakhaliInputTk < 0) {
        return alert('Please Enter Valid Amount')
    }

    document.getElementById('noakhaliDonateTk').innerText = noakhaliInputTk + noakhaliDonatedTk
    const donateAfterBalance = mainTk - noakhaliInputTk;
    document.getElementById('mainTk').innerText = donateAfterBalance
    mainTk = donateAfterBalance
    document.getElementById('noakhaliInputFeild').value = ''
    modal.showModal()
})
