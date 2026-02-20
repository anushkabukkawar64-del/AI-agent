import {createAgent } from 'langchain'
import { ChatOllama } from '@langchain/ollama';

import { TavilySearch } from "@langchain/tavily";

const accessInternet = new TavilySearch({

  maxResult: 5,
  topic: "news",
  searchdepth: "Advance",
  tavilyApiKey: "",

})

let ollama = new ChatOllama({
    model: "llama3.1",
    temperature: 0.1
})

let agent = createAgent({
    model: ollama,
    tools: [accessInternet]
})

const run = async () => {
    try {
        let response = await agent.invoke({
            messages: "meaning of name sneha"
        })

    console.log(response.messages[1].content);
        console.log(response);
    } catch (e) {
        console.log(e);
    }
}

run();
