import axios from "axios";
export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            }, headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                // 'X-RapidAPI-Key': process.env.TravelApiKey
                'X-RapidAPI-Key': '13f5f929c2msh887f91a70bb8febp148252jsn24ea78005323'
                // 91b534f15bmsh750ec6b7c8e8104p14b5fdjsnf1d529b8d29c   //new fresh
                // 13f5f929c2msh887f91a70bb8febp148252jsn24ea78005323
                // e57fe75a4emshcf9677ac6bc163ap1d40d0jsn8a7bc2895c3c // freah
            }
        });
        return data;
    } catch (error) { console.log(error) }
}
export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
            params: {
                lon: lng,
                lat: lat,
            },
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                // 'X-RapidAPI-Key': process.env.WeatherApiKey
                'X-RapidAPI-Key': '13f5f929c2msh887f91a70bb8febp148252jsn24ea78005323'
            }
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}
