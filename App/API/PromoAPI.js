// Url de L'api
const API_URL = 'http://sfondain.alwaysdata.net/index.php';

export function getPromoFromApi(userId) {
    const url = API_URL + '/list_reducs/' + userId
    // const url = API_URL + '/list_reducs/1'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function addPromoToUserList(userId, code) {
    const url = API_URL + '/scan_reduc/' + userId + '/' + code
    // const url = API_URL + '/scan_reduc/1/PANT30'
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