import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    let routes = await getAllRoutes();
    const seasons = await getListOfSeasons();

    const selectedRegion = req.query.region || null;
    const selectedSeason = req.query.season || null;

    if (selectedRegion) {
        routes = routes.filter(route => route.region === selectedRegion);
    }

    if (selectedSeason) {
        routes = routes.filter(route => route.bestSeason === selectedSeason);
    }

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        selectedRegion,
        selectedSeason
    });
};