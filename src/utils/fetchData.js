const apiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6303f136d7mshd19d3d86cbb2491p183abbjsnbdcd5e12fbc9',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
},
    videoApiOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6303f136d7mshd19d3d86cbb2491p183abbjsnbdcd5e12fbc9',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
    };

async function fetchData(url, options) {
    const response = await fetch(url, options),
        data = await response.json();

    return data;
}

export { apiOptions, fetchData, videoApiOptions };