import dayjs from "dayjs";

const NEXT_PUBLIC_HOLIDAY_API_ENCODING =
  process.env.NEXT_PUBLIC_HOLIDAY_API_ENCODING;

const convertHolidaysToData = (holidays) => {
  return holidays.map((holiday) => {
    const customDate = dayjs(holiday.locdate.toString(), "YYYYMMDD").format(
      "YYYY-MM-DD"
    );
    return {
      title: holiday.dateName,
      date: customDate,
    };
  });
};

const holidayAPI = async (req, res) => {
  const year = req.query.year;

  if (req.method === "GET") {
    try {
      const response = await fetch(
        `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${year}&numOfRows=25&ServiceKey=${NEXT_PUBLIC_HOLIDAY_API_ENCODING}&_type=json`
      );
      const data = await response.json();
      const holidays = convertHolidaysToData(data.response.body.items.item);
      res.status(200).json(holidays);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default holidayAPI;
