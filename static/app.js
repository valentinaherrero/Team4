function dataEndpoints() {
    fetch('/priorwkdata').then(data=>data.json()).then(d=>{
    d.datasets.forEach(n=>{
        o = document.createElement("option")
        o.text = n
        document.getElementById('dataSelect').add(o)
    })
    updateData()
})
}



fetch('/pridedata').then(data=>data.json()).then(d=>{
    d.charts.forEach(n=>{
        o = document.createElement("option")
        o.text = n
        document.getElementById('chartSelect').add(o)
    })
    dataEndpoints()
})