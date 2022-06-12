
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const logos = importAll(require.context('../images/logo', false, /\.(png|jpe?g|svg)$/));
const stadiums = importAll(require.context('../images/stadium', false, /\.(png|jpe?g|svg)$/));

const teams = [{
        "name": "AFC Bounermouth",
        "logoIMG": logos["afcBournemouth.svg"],
        "stadiumIMG": stadiums["afcBournemouth.jpg"]
    },{
        "name": "Arsenal",
        "logoIMG": logos["arsenal.svg"],
        "stadiumIMG": stadiums["arsenal.jpg"]
    },
    {
        "name": "Aston Villa",
        "logoIMG": logos["astonVilla.svg"],
        "stadiumIMG": stadiums["astonVilla.jpg"]
    },{
        "name": "Brentford",
        "logoIMG": logos["brentford.svg"],
        "stadiumIMG": stadiums["brentford.jpg"]
    },
    {
        "name": "Brighton & Hove Albion",
        "logoIMG": logos["brightonAndHoveAlbion.svg"],
        "stadiumIMG": stadiums["brightonAndHoveAlbion.jpg"]
    },{
        "name": "Chelsea",
        "logoIMG": logos["chelsea.svg"],
        "stadiumIMG": stadiums["chelsea.jpg"]
    },
    {
        "name": "Crystal Palace",
        "logoIMG": logos["crystalPalace.svg"],
        "stadiumIMG": stadiums["crystalPalace.jpg"]
    },{
        "name": "Everton",
        "logoIMG": logos["everton.svg"],
        "stadiumIMG": stadiums["everton.jpg"]
    },
    {
        "name": "Fullham",
        "logoIMG": logos["fullham.svg"],
        "stadiumIMG": stadiums["fullham.jpg"]
    },{
        "name": "Leeds United",
        "logoIMG": logos["leedsUnited.svg"],
        "stadiumIMG": stadiums["leedsUnited.jpg"]
    },
    {
        "name": "Leceister City",
        "logoIMG": logos["leceisterCity.svg"],
        "stadiumIMG": stadiums["leceisterCity.jpg"]
    },{
        "name": "Liverpool",
        "logoIMG": logos["liverpool.svg"],
        "stadiumIMG": stadiums["liverpool.jpg"]
    },
    {
        "name": "Manchester City",
        "logoIMG": logos["manchesterCity.svg"],
        "stadiumIMG": stadiums["manchesterCity.jpg"]
    },{
        "name": "Manchester United",
        "logoIMG": logos["manchesterUnited.svg"],
        "stadiumIMG": stadiums["manchesterUnited.jpg"]
    },
    {
        "name": "Newcastle United",
        "logoIMG": logos["newcastleUnited.svg"],
        "stadiumIMG": stadiums["newcastleUnited.jpg"]
    },{
        "name": "Nottingham Forrest",
        "logoIMG": logos["nottinghamForrest.svg"],
        "stadiumIMG": stadiums["nottinghamForrest.jpg"]
    },
    {
        "name": "Southampton",
        "logoIMG": logos["southampton.svg"],
        "stadiumIMG": stadiums["southampton.jpg"]
    },{
        "name": "Tottenham Hotspur",
        "logoIMG": logos["tottenhamHotspur.svg"],
        "stadiumIMG": stadiums["tottenhamHotspur.jpg"]
    },
    {
        "name": "West Ham United",
        "logoIMG": logos["westHamUnited.svg"],
        "stadiumIMG": stadiums["westHamUnited.jpg"]
    },{
        "name": "Wolverhampton",
        "logoIMG": logos["wolverhampton.svg"],
        "stadiumIMG": stadiums["wolverhampton.jpg"]
    }
]

export default teams;
