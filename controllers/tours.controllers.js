const {
  createToursServices,
  getToursServices,
  getATourService,
  updateATourServices,
  getCheapestTourServices,
} = require("../services/tours.services");
// get all route
exports.getAllTour = async (req, res, next) => {
  try {
    let filters = { ...req.query };
    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);

    let filtersStr = JSON.stringify(filters);
    filtersStr = filtersStr.replace(/\b(gt|gte|lt|lte)\b/g, (macth) => `$${macth}`);

    filters = JSON.parse(filtersStr);
    const queries = {};
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
      console.log(sortBy);
    }
    console.log(req.query.fields);
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
      console.log(fields);
    }
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    const result = await getToursServices(filters, queries);

    res.status(200).send({
      status: "success",
      message: "all tour found successful",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: 'tour couldn"t found',
      error: error.message,
    });
  }
};

// get a route
exports.getATour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getATourService(id);

    res.status(200).send({
      status: "success",
      message: "successfully Foud a tour",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: 'tour couldn"t create',
      error: error.message,
    });
  }
};

// create a tour
exports.createTours = async (req, res, next) => {
  try {
    const result = await createToursServices(req.body);
    res.status(200).send({
      status: "success",
      message: "successfully create tour",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: 'tour couldn"t create',
      error: error.message,
    });
  }
};

// update a tour
exports.updateATour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateATourServices(id, req.body);
    res.status(200).send({
      status: "success",
      message: "successfully Update a tour",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "can\t update a tour",
      error: error.message,
    });
  }
};

exports.getCheapestTour = async (req, res, next) => {
  try {
    const result = await getCheapestTourServices();

    console.log(result);
    res.status(200).send({
      status: "success",
      message: "successfully Update a tour",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "can\t get a Cheapest tour ",
      error: error.message,
    });
  }
};
