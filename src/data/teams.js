
function importAll(r) {
  let images = {};
  r.keys().map((item) =>  images[item.replace('./', '')] = r(item) );
  return images;
}

const logos = importAll(require.context('../images/logo', false, /\.(png|jpe?g|svg)$/));
const stadiums = importAll(require.context('../images/stadium', false, /\.(png|jpe?g|svg)$/));

const teams = [{
        "name": "AFC Bounermouth",
        "logoIMG": logos["afcBournemouth.svg"],
        "stadiumIMG": stadiums["afcBournemouth.jpg"],
        "clicked": false
    },{
        "name": "Arsenal",
        "logoIMG": logos["arsenal.svg"],
        "stadiumIMG": stadiums["arsenal.jpg"],
        "clicked": false
    },
    {
        "name": "Aston Villa",
        "logoIMG": logos["astonVilla.svg"],
        "stadiumIMG": stadiums["astonVilla.jpg"],
        "clicked": false
    },{
        "name": "Brentford",
        "logoIMG": logos["brentford.svg"],
        "stadiumIMG": stadiums["brentford.jpg"],
        "clicked": false
    },
    {
        "name": "Brighton & Hove Albion",
        "logoIMG": logos["brightonAndHoveAlbion.svg"],
        "stadiumIMG": stadiums["brightonAndHoveAlbion.jpg"],
        "clicked": false
    },{
        "name": "Chelsea",
        "logoIMG": logos["chelsea.svg"],
        "stadiumIMG": stadiums["chelsea.jpg"],
        "clicked": false
    },
    {
        "name": "Crystal Palace",
        "logoIMG": logos["crystalPalace.svg"],
        "stadiumIMG": stadiums["crystalPalace.jpg"],
        "clicked": false
    },{
        "name": "Everton",
        "logoIMG": logos["everton.svg"],
        "stadiumIMG": stadiums["everton.jpg"],
        "clicked": false
    },
    {
        "name": "Fullham",
        "logoIMG": logos["fullham.svg"],
        "stadiumIMG": stadiums["fullham.jpg"],
        "clicked": false
    },{
        "name": "Leeds United",
        "logoIMG": logos["leedsUnited.svg"],
        "stadiumIMG": stadiums["leedsUnited.jpg"],
        "clicked": false
    },
    {
        "name": "Leceister City",
        "logoIMG": logos["leceisterCity.svg"],
        "stadiumIMG": stadiums["leceisterCity.jpg"],
        "clicked": false
    },{
        "name": "Liverpool",
        "logoIMG": logos["liverpool.svg"],
        "stadiumIMG": stadiums["liverpool.jpg"],
        "clicked": false
    },
    {
        "name": "Manchester City",
        "logoIMG": logos["manchesterCity.svg"],
        "stadiumIMG": stadiums["manchesterCity.jpg"],
        "clicked": false
    },{
        "name": "Manchester United",
        "logoIMG": logos["manchesterUnited.svg"],
        "stadiumIMG": stadiums["manchesterUnited.jpg"],
        "clicked": false
    },
    {
        "name": "Newcastle United",
        "logoIMG": logos["newcastleUnited.svg"],
        "stadiumIMG": stadiums["newcastleUnited.jpg"],
        "clicked": false
    },{
        "name": "Nottingham Forrest",
        "logoIMG": logos["nottinghamForrest.svg"],
        "stadiumIMG": stadiums["nottinghamForrest.jpg"],
        "clicked": false
    },
    {
        "name": "Southampton",
        "logoIMG": logos["southampton.svg"],
        "stadiumIMG": stadiums["southampton.jpg"],
        "clicked": false
    },{
        "name": "Tottenham Hotspur",
        "logoIMG": logos["tottenhamHotspur.svg"],
        "stadiumIMG": stadiums["tottenhamHotspur.jpg"],
        "clicked": false
    },
    {
        "name": "West Ham United",
        "logoIMG": logos["westHamUnited.svg"],
        "stadiumIMG": stadiums["westHamUnited.jpg"],
        "clicked": false
    },{
        "name": "Wolverhampton",
        "logoIMG": logos["wolverhampton.svg"],
        "stadiumIMG": stadiums["wolverhampton.jpg"],
        "clicked": false
    }
]

export default teams;
