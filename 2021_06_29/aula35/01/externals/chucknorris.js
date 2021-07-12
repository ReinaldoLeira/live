const axios = require('axios')

module.exports.obterFraseChuckNorris = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random')

    if (response.status === 200) {
        const { data } = response        
        return data.value
    }
}
