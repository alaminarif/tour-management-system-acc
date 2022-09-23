const Tours = require("../models/Tours");

exports.getToursServices = async (query, queries) => {
  const tour = await Tours.find(query)
    /** */
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const totalTours = await Tours.countDocuments(query);
  const pageCount = Math.ceil(totalTours / queries.limit);

  return { totalTours, pageCount, tour };
};

exports.getATourService = async (id) => {
  const result = await Tours.findById(id);
  return result;
};

exports.createToursServices = async (data) => {
  const result = await Tours.create(data);
  return result;
};

exports.updateATourServices = async (id, data) => {
  const result = await Tours.updateOne(
    { _id: id },
    { $set: data },
    {
      runValidators: true,
    }
  );
  return result;
};

// Cheapest tour
exports.getCheapestTourServices = async () => {
  const result = await Tours.find({}).sort({ cost: 1 }).limit(3);
  return result;
};
