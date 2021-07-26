function request (url) {
    return  fetch(`https://api.giphy.com/v1/gifs/search?api_key=giCcMb9aml0SqD6kZ51Wjrt3sGQUNlK1&q=${url}&limit=12&offset=0&rating=g&lang=en`);
};

function suggest (url) {
    return fetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=giCcMb9aml0SqD6kZ51Wjrt3sGQUNlK1&q=${url}&limit=5&offset=0`)
}

export { request, suggest }