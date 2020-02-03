const API_URL = 'http://sfondain.alwaysdata.net/index.php';

export function getPromoFromApi() {
    const url = API_URL + '/list_reducs/1'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}