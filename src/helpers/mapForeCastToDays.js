const mapForeCastToDays = (array) => {
  return array.map((elements) => {
    return {
      date: elements.date,
      condition: elements.day.condition,
      avgtemp: { avgtemp_c: elements.day.avgtemp_c, avgtemp_f: elements.day.avgtemp_f },
      astro:elements.astro
    };
  });
};

export default mapForeCastToDays;

