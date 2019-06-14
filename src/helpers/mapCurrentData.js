const mapCurrentData = (current) => {
  return {
    condition: { ...current.condition },
    avgtemp: { temp_c: current.temp_c, temp_f: current.temp_f },
    day: 'Today'
  };
};

export default mapCurrentData;
