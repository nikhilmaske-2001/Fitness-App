export const exercisesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3f6c33fab9mshf73f255006bd78fp1ce64bjsn4287ac851d4d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "3f6c33fab9mshf73f255006bd78fp1ce64bjsn4287ac851d4d",
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}