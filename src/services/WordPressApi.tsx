import axios from 'axios';

class WordPressApi {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    public async get(endpoint: string): Promise<any> {
        const url = `${this.baseURL}${endpoint}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            // Gérer les erreurs
            throw new Error(`Erreur lors de la requête GET ${url}: ${error.message}`);
        }
    }

    public async post(endpoint: string, data: any): Promise<any> {
        const url = `${this.baseURL}${endpoint}`;
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            // Gérer les erreurs
            throw new Error(`Erreur lors de la requête POST ${url}: ${error.message}`);
        }
    }

    public async delete(endpoint: string): Promise<void> {
        const url = `${this.baseURL}${endpoint}`;
        try {
            await axios.delete(url);
        } catch (error) {
            // Gérer les erreurs
            throw new Error(`Erreur lors de la requête DELETE ${url}: ${error.message}`);
        }
    }
}

export default WordPressApi;
