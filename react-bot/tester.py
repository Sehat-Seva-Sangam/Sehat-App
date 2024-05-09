from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows access from any domain

@app.route('/chat', methods=['POST'])
def chat():
    # Example response for testing
    data = request.json
    return jsonify({"response": f"Received: {data.get('user_input')} with prompt {data.get('system_prompt')}"}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
