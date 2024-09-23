const getInnerTextToValue = (id) => {
    const value = document.getElementById(id).innerText;
    return parseFloat(value);
}
const getInputToValue = (id) => {
    const values = document.getElementById(id).value;
    return parseFloat(values);
}
let mainTk = getInnerTextToValue('mainTk').toFixed(2)
let modal = document.getElementById('my_modal_1')
const historyResultContainer = document.getElementById('historyResultContainer')

// noakhali section
const noakhaliBtn = document.getElementById('noakhaliBtn')
noakhaliBtn.addEventListener('click', () => {
    const noakhaliDonatedTk = getInnerTextToValue('noakhaliDonateTk')
    const noakhaliInputTk = getInputToValue('noakhaliInputFeild')
    if (noakhaliInputTk > mainTk) {
        return alert('sorry not enough you TK')
    }
    if (isNaN(noakhaliInputTk) || typeof (noakhaliInputTk) === false || noakhaliInputTk <=0) {
        return alert('Please Enter Valid Amount')
    }

    document.getElementById('noakhaliDonateTk').innerText = noakhaliInputTk + noakhaliDonatedTk
    const donateAfterBalance = mainTk - noakhaliInputTk;
    document.getElementById('mainTk').innerText = donateAfterBalance.toFixed(2)
    mainTk = donateAfterBalance
    document.getElementById('noakhaliInputFeild').value = ''
    modal.showModal()

    const createDiv = document.createElement('div')
    createDiv.classList.add('shadow-lg', 'border', 'p-4', 'rounded-xl', 'space-y-2')
    const now = new Date();
    createDiv.innerHTML = `
<p class="font-bold text-xl">${noakhaliInputTk} Taka is Donate for Flood at Noakhali, Bangladesh</p>
<p>Date : ${now}</p>
    `
    historyResultContainer.appendChild(createDiv)
})

// feni section 
const feniBtn = document.getElementById('feniBtn')
feniBtn.addEventListener('click', () => {
    const feniDonateTk = getInnerTextToValue('feniDonateTk')
    const feniInputFeild = getInputToValue('feniInputFeild')
    if (feniInputFeild > mainTk) {
        return alert('sorry not enough you TK')
    }
    if (isNaN(feniInputFeild) || typeof (feniInputFeild) === false || feniInputFeild <= 0) {
        return alert('Please Enter Valid Amount')
    }

    document.getElementById('feniDonateTk').innerText = feniInputFeild + feniDonateTk
    const donateAfterBalance = mainTk - feniInputFeild;
    document.getElementById('mainTk').innerText = donateAfterBalance.toFixed(2)
    mainTk = donateAfterBalance
    document.getElementById('feniInputFeild').value = ''
    modal.showModal()

    const createDiv = document.createElement('div')
    createDiv.classList.add('shadow-lg', 'border', 'p-4', 'rounded-xl', 'space-y-2')
    const now = new Date();
    createDiv.innerHTML = `
<p class="font-bold text-xl">${feniInputFeild} Taka is Donate for Flood Relief in Feni,Bangladesh</p>
<p>Date : ${now}</p>
    `
    historyResultContainer.appendChild(createDiv)
})

// protest section
const protestBtn = document.getElementById('protestBtn')
protestBtn.addEventListener('click', () => {
    const protestDonationTk = getInnerTextToValue('protestDonationTk')
    const protestInputFeild = getInputToValue('protestInputFeild')
    if (protestInputFeild > mainTk) {
        return alert('sorry not enough you TK')
    }
    if (isNaN(protestInputFeild) || typeof (protestInputFeild) === false || protestInputFeild <= 0) {
        return alert('Please Enter Valid Amount')
    }

    document.getElementById('protestDonationTk').innerText = protestInputFeild + protestDonationTk
    const donateAfterBalance = mainTk - protestInputFeild;
    document.getElementById('mainTk').innerText = donateAfterBalance.toFixed(2)
    mainTk = donateAfterBalance
    document.getElementById('protestInputFeild').value = ''
    modal.showModal()

    const createDiv = document.createElement('div')
    createDiv.classList.add('shadow-lg', 'border', 'p-4', 'rounded-xl', 'space-y-2')
    const now = new Date();
    createDiv.innerHTML = `
<p class="font-bold text-xl">${protestInputFeild} Taka is Aid for Injured in the Quota Movement</p>
<p>Date : ${now}</p>
    `
    historyResultContainer.appendChild(createDiv)
})


// toggle and switch option donation and history button
const donationBtn = document.getElementById('donationBtn')
const histroyBtn = document.getElementById('histroyBtn')
const histroySeaction = document.getElementById('histroySeaction')
const mainSection = document.getElementById('mainSection')

donationBtn.addEventListener('click', (e) => {
    mainSection.style.display = 'block'
    donationBtn.classList.add('bg-[#B4F461]', 'text-black')
    histroyBtn.classList.remove('bg-[#B4F461]', 'text-black')
})
histroyBtn.addEventListener('click', (e) => {
    histroySeaction.classList.remove('hidden')
    mainSection.style.display = 'none'
    histroyBtn.classList.add('bg-[#B4F461]', 'text-black')
    donationBtn.classList.remove('bg-[#B4F461]', 'text-black')
})

