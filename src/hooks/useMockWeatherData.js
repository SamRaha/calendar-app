import { useState, useEffect } from "react";
import moment from "moment";

// You'll need to install moment to use this utility (https://momentjs.com/)
// > npm install moment

// Unfortunately this library throws a console warning in the most
// recent CRA linter – my apologies!

const useMockWeatherData = (year) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const yearMoment = moment(year);
        const daysInYear = yearMoment.isLeapYear() ? 366 : 365;
        const d = [];
        for (let i = 0; i < 12; i++) {
            const monthMoment = moment(`${year}-${`${i + 1}`.padStart("0", 2)}`);
            const daysInMonth = monthMoment.daysInMonth();
            for (let j = 0; j < daysInMonth; j++) {
                d.push({
                    year,
                    month: i + 1,
                    day: j + 1,
                    weather: Math.random() < 0.3 ? "sunny" : "rainy",
                });
            }
        }
        setData(d);
    }, [year]);

    return data;
};

export default useMockWeatherData;
