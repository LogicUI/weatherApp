const mapCurrentData = (current) => {
  return {
    condition: { ...current.condition },
    avgtemp: { temp_c: current.temp_c, temp_f: current.temp_f }
  };
};

export default mapCurrentData;
