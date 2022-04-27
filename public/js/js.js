let getHydrants = async() => {

    let hydrantsFetchResult = await fetch('http://localhost:3000/api/hydrants', {
        mode: 'no-cors'
    });
    let hydrantsText = await hydrantsFetchResult.text();
    let hydrantsList = (new window.DOMParser()).parseFromString(hydrantsText, "text/xml");

    console.log(hydrantsList);





};


getHydrants();