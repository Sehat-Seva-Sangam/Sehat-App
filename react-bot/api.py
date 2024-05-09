from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_community.llms import LlamaCpp
from langchain.prompts import PromptTemplate
from huggingface_hub import hf_hub_download

app = Flask(__name__)
CORS(app)  # Allow all origins

def create_llm_chain(system_prompt):
    repo_id = "TheBloke/Mistral-7B-Instruct-v0.1-GGUF"
    model_file_name = "mistral-7b-instruct-v0.1.Q4_0.gguf"
    model_path = hf_hub_download(repo_id=repo_id, filename=model_file_name, repo_type="model")

    llm = LlamaCpp(
        model_path=model_path,
        temperature=0,
        max_tokens=512,
        top_p=1,
        stop=["[INST]"],
        verbose=False,
        streaming=True,
    )

    template = f"<s>[INST]{system_prompt}[/INST]</s>[INST]{{question}}[/INST]"
    prompt = PromptTemplate(template=template, input_variables=["question"])
    llm_chain = prompt | llm
    return llm_chain

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data['user_input']
    system_prompt = data.get('system_prompt', "You are a helpful AI assistant who answers questions in short sentences.")

    llm_chain = create_llm_chain(system_prompt)
    response = llm_chain.invoke({"question": user_input})
    
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
