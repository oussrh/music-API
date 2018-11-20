{
    const ul = document.querySelector('.results');

    const createResultList = (results) => {
        ul.innerHTML = '';
        results.map(x => liCreation(x))
    };

    const liCreation = (elm) => {
        li = document.createElement('li');
        li.id = elm.id;
        li.innerHTML = elm.name;
        ul.appendChild(li);
        clickedLi(li);
    };


    const clickedLi = (li) => {
        li.addEventListener('click', getYoutubeVids)
    };

    //********************************
    // fetch then methode
    //********************************
    // let getYoutubeVids = (e) =>{
    //     const li = e.currentTarget;
    //     const url = `https://musicdemons.com/api/v1/artist/${li.id}/songs`;
    //     fetch(url, {
    //         method: "GET"})
    //     .then((response) => response.json())
    //     .then((responseData) => videoCreation(responseData))
    //     .catch(error => console.warn(error));
    // };

    //********************************
    // fetch async await
    //********************************
    const getYoutubeVids = async (e) => {
        const li = e.currentTarget;
        const url = `https://musicdemons.com/api/v1/artist/${li.id}/songs`;
        let response = await fetch(url, {method: "GET"}).catch(error => console.warn(error));
            response = await response.json();
            videoCreation(response);     
    };

    const videoCreation = (vids) => {
        ul.innerHTML = '';
        vids.map(x => displayVideo(x))
    };

    const displayVideo = (vid) => {
        li = document.createElement('li');
        li.innerHTML = /*HTML*/ `<iframe width="560" height="315" src="https://www.youtube.com/embed/${vid.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        ul.appendChild(li);
    };

    const search = value => {
        const url = `https://musicdemons.com/api/v1/artist/autocomplete`;
        fetch(url, {
                method: "POST",
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: `name=${value}`
            })
            .then((response) => response.json())
            .then((responseData) => createResultList(responseData))
            .catch(error => console.warn(error));
    };

    const handleKeyUpSearch = e => {
        const input = e.currentTarget;
        search(input.value);
    };

    const init = () => {
        document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    };

    init();

}