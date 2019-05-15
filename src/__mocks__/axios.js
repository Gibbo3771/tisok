const slips = [
  { slip: { advice: "life is good", slip_id: 1 } },
  { slip: { advice: "apples taste good", slip_id: 2 } },
  { slip: { advice: "death is certain, get over it", slip_id: 3 } }
];

module.exports = {
  get: id => {
    return Promise.resolve({
      data: {
        slip: {
          advice: "testing is important",
          slip_id: 1
        }
      }
    });
  }
};
