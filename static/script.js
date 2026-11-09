async function checkStatus() {

    try {

        const healthResponse = await fetch("/health");
        const statusResponse = await fetch("/status");

        const health = await healthResponse.json();
        const status = await statusResponse.json();

        document.getElementById("health").innerText =
            health.status;

        document.getElementById("status").innerText =
            status.status;

        document.getElementById("uptime").innerText =
            status.uptime + " seconds";

        document.getElementById("last-check").innerText =
            "Last checked: " + new Date().toLocaleTimeString();

    } catch (error) {

        document.getElementById("status").innerText = "Offline";
        document.getElementById("health").innerText = "Unhealthy";

    }
}

checkStatus();

setInterval(checkStatus, 5000);
