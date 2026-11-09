from flask import Flask, render_template, jsonify
import time

app = Flask(__name__)

start_time = time.time()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/health")
def health():
    return jsonify({
        "status": "Healthy",
        "message": "Application is running"
    })

@app.route("/status")
def status():
    uptime = int(time.time() - start_time)

    return jsonify({
        "application": "Self-Healing Infrastructure",
        "status": "Running",
        "uptime": uptime
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
