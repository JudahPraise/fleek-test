const count = document.getElementById('count');
const counter = document.getElementById('counter');
count.innerHTML = 0;
counter.addEventListener("click", function(){
    count.innerHTML++;
})

console.log('Get-NetIPAddress -AddressFamily IPv4 -InterfaceIndex $(Get-NetConnectionProfile | Select-Object -ExpandProperty InterfaceIndex) | Select-Object -ExpandProperty IPAddress')