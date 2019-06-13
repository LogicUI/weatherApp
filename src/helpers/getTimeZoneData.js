import timeZoneDb from '../../src/apis/timeZoneDb';


const getTimeZone = async (latt, long) => {
  const response = await timeZoneDb.get('get-time-zone', {
    params: {
      key: 'XAXB084LK0O4',
      by: 'position',
      lat: latt,
      lng: long,
      format: 'json'
    }
  });

  
  const data = response.data.zoneName;
  return data;
};

export default getTimeZone;
