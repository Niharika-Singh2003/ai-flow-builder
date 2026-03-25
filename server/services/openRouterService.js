const axios = require('axios');

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_MODEL = 'meta-llama/llama-3.1-8b-instruct:free';

const getAIResponse = async (prompt) => {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    console.log('OpenRouter API Key:', apiKey ? 'Present' : 'Missing');
    console.log('Model:', OPENROUTER_MODEL);
    console.log('Prompt:', prompt);

    if (!apiKey) {
      const error = new Error('OpenRouter API key is missing. Check OPENROUTER_API_KEY in .env');
      error.status = 500;
      throw error;
    }

    const payload = {
      model: OPENROUTER_MODEL,
      messages: [
        { role: 'system', content: 'Respond briefly and directly in 1-3 sentences.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 60,
      temperature: 0.3,
      stream: false,
    };

    const { data } = await axios.post(OPENROUTER_URL, payload, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': 'https://ai-flow-builder.onrender.com',
        'X-Title': 'AI Flow Builder',
        'Content-Type': 'application/json',
      },
    });

    const responseText = data?.choices?.[0]?.message?.content?.trim();

    if (!responseText) {
      const error = new Error('OpenRouter returned an empty response.');
      error.status = 502;
      throw error;
    }

    return responseText;
  } catch (error) {
    const status = error.response?.status || error.status || 500;
    const providerMessage = error.response?.data?.error?.message;
    const message = providerMessage || error.message || 'Failed to fetch response from OpenRouter.';

    const serviceError = new Error(`OpenRouter request failed: ${message}`);
    serviceError.status = status;
    throw serviceError;
  }
};

module.exports = {
  getAIResponse,
};
