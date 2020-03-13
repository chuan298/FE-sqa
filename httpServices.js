
async function get(url) {
    let options = {
        method: 'get',
        headers: {
            'Accept': 'Application/json',
            'Content-type': 'Application/json',
        }
    }
    return await fetch(url, options)
        .then(res => res.json())

}
async function post(url, data) {

    let options = {
        method: 'post',
        headers: {
            'Accept': 'Application/json',
            'Content-type': 'Application/json',
        },
        body: JSON.stringify(data)
    }
    return await fetch(url, options)
        .then(res => res.json())
}

