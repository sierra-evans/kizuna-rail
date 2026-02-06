import { getCompleteRouteDetails } from '../../models/model.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getCompleteRouteDetails(routeId);

    // TODO: getCompleteRouteDetails instead

    res.render('routes/details', { 
        title: 'Route Details',
        details
    });
};