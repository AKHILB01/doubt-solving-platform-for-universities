// utils/ollama.js
const ollama = require('ollama');

class OllamaService {
  constructor() {
    this.isInitialized = false;
  }

  async initialize() {
    try {
      // Check if Ollama is running
      await ollama.list();
      this.isInitialized = true;
      console.log('✅ Ollama service initialized');
    } catch (error) {
      console.error('❌ Ollama not available:', error.message);
      this.isInitialized = false;
    }
  }

  async summarizeText(text, maxLength = 150) {
    if (!this.isInitialized) {
      await this.initialize();
      if (!this.isInitialized) {
        throw new Error('Ollama service not available');
      }
    }

    try {
      const prompt = `Please provide a concise summary of the following text in ${maxLength} characters or less. Focus on the main question or problem being described:\n\n${text}`;

      const response = await ollama.generate({
        model: 'llama2', // or any available model
        prompt: prompt,
        options: {
          temperature: 0.3,
          top_p: 0.9,
          num_predict: 100
        }
      });

      return response.response.trim();
    } catch (error) {
      console.error('Summarization failed:', error);
      // Fallback: return first 150 characters
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    }
  }

  async extractKeyTerms(text) {
    if (!this.isInitialized) {
      await this.initialize();
      if (!this.isInitialized) {
        return [];
      }
    }

    try {
      const prompt = `Extract the key technical terms, concepts, or topics from the following text. Return them as a comma-separated list:\n\n${text}`;

      const response = await ollama.generate({
        model: 'llama2',
        prompt: prompt,
        options: {
          temperature: 0.1,
          num_predict: 50
        }
      });

      return response.response.split(',').map(term => term.trim()).filter(term => term.length > 0);
    } catch (error) {
      console.error('Key terms extraction failed:', error);
      return [];
    }
  }
}

module.exports = new OllamaService();