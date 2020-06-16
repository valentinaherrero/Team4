function populateDropDown() {
    distinctList=[]
    fetch('https://pridetrip.herokuapp.com/pridedata?length=100').then(data=>data.json()).then(d=>{
    d.results.forEach(n=>{
        o = document.createElement("option")
        o.text = n
        document.getElementById('selDataset').add(o)
    })
    
})}

populateDropDown();

distinctList=[]
fetch('https://pridetrip.herokuapp.com/priorwkdata?length=50').then(d=>d.json()).then(data => {
    data.results.forEach(dd => {
    if (distinctList.includes(dd.dozone)){}
    else {
            distinctList.push(dd.dozone);
    }
    if (distinctList.includes(dd.pkzone)){}
    else {
        distinctList.push(dd.pkzone);}
    });
    console.log(distinctList)
});





          
        






// function populateTable() {
//     fetch('/priorwkdata').then(data=>data.json()).then(d=>{
//     d.datasets.forEach(n=>{
//         o = document.createElement("option")
//         o.text = n
//         document.getElementById('dataSelect').add(o)
//     })
//     updateData()
// })
// }


// // Match name of function to Valentina's function to call graphs (Sankey and Payment/Tips)
// function populateGraphs() {
//     fetch('/priorwkdata').then(data=>data.json()).then(d=>{
//     d.datasets.forEach(n=>{
//         o = document.createElement("option")
//         o.text = n
//         document.getElementById('dataSelect').add(o)
//     })
//     updateData()
// })
// }


// Promise needs to initiate the populateDropDown, graphs and table
// fetch('/pridedata').then(data=>data.json()).then(d=>{
//     d.charts.forEach(n=>{
//         o = document.createElement("option")
//         o.text = n
//         document.getElementById('chartSelect').add(o)
//     })
//     dataEndpoints()
// })