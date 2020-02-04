// Url de L'api
const API_URL = 'http://sfondain.alwaysdata.net/index.php';

// Récupère les codes promos scannés par l'utilisateur
export function getPromoFromApi(userId) {
    const url = API_URL + '/list_reducs/' + userId
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

// Ajoute un code promo à la liste de codes de l'utilisateur
export function addPromoToUserList(userId, code) {
    const url = API_URL + '/scan_reduc/' + userId + '/' + code
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function login(mail, password) {
    const url = API_URL + '/connect_user/' + mail + '/' + password
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function signup(mail, password, firstname, lastname) {
    const url = API_URL + '/insert_user/' + mail + '/' + password + '/' + firstname + '/' + lastname
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}