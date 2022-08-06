const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_COURSE } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await api.delete(`/api/courses/${id}`);
        return res.json(course.data);
    } catch (error) {
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'Server error' });
        }
        const { status, data } = error.response;
        return res.status(status).json(data);
    }
}

