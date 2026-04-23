export default class Services {
    getData(VEGPONT, callback) {
        fetch(VEGPONT)
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                callback(data)
            })
            .catch(error => console.log(error));
    }
}