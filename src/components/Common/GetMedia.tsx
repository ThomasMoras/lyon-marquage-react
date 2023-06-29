import React from 'react';
import WordPressApi from '../../services/WordPressApi';

class GetMedia extends React.Component {
    wpApi: WordPressApi;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.wpApi = new WordPressApi('http://wordpress.localhost/wp-json/wp/v2');

        // Initialisation des états si nécessaire
        this.state = {
            data: [],
        };
    }

    async componentDidMount() {
        // Code à exécuter après le rendu du composant
        try {
            const return_data = await this.wpApi.get('/media');
            //this.images_array = data;
            console.log(return_data);
            // Traitez les données reçues de l'API WordPress
            this.setState({ data: return_data });
        } catch (error) {
            console.error(error);
            // Gérez les erreurs de requête
        }
    }

    render() {
        return <div>Test</div>;
    }
}

export default GetMedia;
