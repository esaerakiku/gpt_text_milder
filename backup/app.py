from flask import Flask, request
from flask_cors import CORS  # 追加
import openai

openai.api_key = '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'

app = Flask(__name__)
CORS(app)  # 追加

@app.route('/improve_text', methods=['POST'])
def improve_text():
    text = request.json['text']
    response = openai.Completion.create(engine="text-davinci-002", prompt=text, max_tokens=100)
    improved_text = response.choices[0].text.strip()
    return {'improved_text': improved_text}

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
