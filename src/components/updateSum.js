const updateSum = (sumDom, sumData) => {
    sumDom.querySelector('p').innerText = sumData.result;
};

export default updateSum;
