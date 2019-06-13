const mapCurrentData = (current) => {
  const todayDate = new Date().toJSON().slice(0, 10);
  return {
    date:todayDate,
    condition: { ...current.condition },
    avgtemp: { temp_c: current.temp_c, temp_f: current.temp_f },
    day: 'Today'
  };
};

export default mapCurrentData;
