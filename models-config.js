/**
 * Models Configuration File
 * 
 * This file contains all the model configurations for the LLM Chess Arena.
 * You can easily add or modify models by editing this file.
 */

const PROVIDER_CONFIG = {
    /**
    'groq': {
        displayName: 'Groq',
        models: {
            'llama-3.3-70b-versatile': {
                displayName: 'LLaMa 3.3 70B Versatile',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'llama-3.3-70b-specdec': {
                displayName: 'LLaMa 3.3 70B SpecDec',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'llama-3.1-8b': {
                displayName: 'LLaMa 3.1 8B',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'mixtral-8x7b-32768': {
                displayName: 'Mixtral 8x7B',
                tempRange: { min: 0.1, max: 1.0 }
            }
        }
    },
     */
    'openai': {
        displayName: 'OpenAI',
        models: {
            'gpt-5.2': {
                displayName: 'GPT-5.2',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'o3': {
                displayName: 'o3',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'o3-mini': {
                displayName: 'o3-mini',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'gpt-4-turbo': {
                displayName: 'GPT-4 Turbo',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'gpt-4o': {
                displayName: 'GPT-4o',
                tempRange: { min: 0.1, max: 1.0 }
            },
            
        }
    },
    'gemini': {
        displayName: 'Google Gemini',
        models: {
            'gemini-3-pro-preview': {
                displayName: 'Gemini 3 Pro Preview',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'gemini-3-flash-preview': {
                displayName: 'Gemini 3 Flash Preview',
                tempRange: { min: 0.1, max: 1.0 }
            },
            //gemini-2.5-pro
            'gemini-2.5-pro': {
                displayName: 'gemini-2.5-pro',
                tempRange: { min: 0.1, max: 1.0 }
            },
            //gemini-2.5-flash
            'gemini-2.5-flash': {
                displayName: 'gemini-2.5-flash',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'gemini-2.5-flash-lite': {
                displayName: 'gemini-2.5-flash-lite',
                tempRange: { min: 0.1, max: 1.0 }
            }
        }
    },
    /**
    'grok': {
        displayName: 'xAI Grok',
        models: {
            'grok-beta': {
                displayName: 'Grok Beta',
                tempRange: { min: 0.1, max: 1.0 }
            }
        }
    },
    'openrouter': {
        displayName: 'OpenRouter',
        models: {
            'anthropic/claude-3-opus:beta': {
                displayName: 'Claude 3 Opus',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'anthropic/claude-3-sonnet': {
                displayName: 'Claude 3 Sonnet',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'anthropic/claude-3-haiku': {
                displayName: 'Claude 3 Haiku',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'meta-llama/llama-3-70b-instruct': {
                displayName: 'Llama 3 70B',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'meta-llama/llama-3-8b-instruct': {
                displayName: 'Llama 3 8B',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'mistralai/mistral-large': {
                displayName: 'Mistral Large',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'mistralai/mistral-8x7b': {
                displayName: 'Mistral 8x7B',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'google/gemini-1.5-pro-latest': {
                displayName: 'Gemini 1.5 Pro',
                tempRange: { min: 0.1, max: 1.0 }
            },
            'google/gemini-1.5-flash-latest': {
                displayName: 'Gemini 1.5 Flash',
                tempRange: { min: 0.1, max: 1.0 }
            }
        }      
    }
    */
};

// Export the configuration
if (typeof module !== 'undefined') {
    module.exports = { PROVIDER_CONFIG };
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    console.log("🔍 Setting up global config in browser environment");
    console.log("📋 PROVIDER_CONFIG:", JSON.stringify(Object.keys(PROVIDER_CONFIG), null, 2));
    
    window.PROVIDERS_CONFIG = PROVIDER_CONFIG;
    console.log("✅ Assigned to window.PROVIDERS_CONFIG");
    
    // Also provide as PROVIDER_CONFIG for potential compatibility
    window.PROVIDER_CONFIG = PROVIDER_CONFIG;
    console.log("✅ Assigned to window.PROVIDER_CONFIG");
}

// execution: python3 -m http.server 8000
/**
git status -> nothing to commit, working tree clean
git checkout -b v2
git branch
git push -u origin v2
*/
