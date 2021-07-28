const URL_GIPHY = "https://api.giphy.com/v1"
const API_KEY = "api_key=giCcMb9aml0SqD6kZ51Wjrt3sGQUNlK1"

function request (url) {
    return  fetch(`${URL_GIPHY}/gifs/search?${API_KEY}&q=${url}&limit=12&offset=0&rating=g&lang=en`);
};

function suggest (url) {
    return fetch(`${URL_GIPHY}/gifs/search/tags?${API_KEY}&q=${url}&limit=5&offset=0`)
}

export { request, suggest }