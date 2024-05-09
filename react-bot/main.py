from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from langchain_community.llms import LlamaCpp
from langchain.prompts import PromptTemplate
from huggingface_hub import hf_hub_download

app = FastAPI()

# Setup CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model for incoming chat requests
class ChatRequest(BaseModel):
    user_input: str
    system_prompt: str = "You are a helpful AI assistant who answers questions in short sentences."

# Function to create the LLM chain
def create_llm_chain(system_prompt: str):
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

@app.post("/chat")
async def chat(chat_request: ChatRequest):
    llm_chain = create_llm_chain(chat_request.system_prompt)
    response = llm_chain.invoke({"question": chat_request.user_input})
    return JSONResponse(content={"response": response})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
