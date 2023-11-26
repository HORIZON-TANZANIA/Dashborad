import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";

const TotalSpent = () => {
  return (
    <div className="flex w-1/2 flex-col justify-between">
      <Card extra="!p-[20px]  w-11/12 h-1/2">
        <div className="flex ">
          <div className="w-72">
            <h1 className="text-lg font-semibold">Print Loyalty Report</h1>
            <p className="my-3 text-[#545454]">
              Find out more about your business and its customers
            </p>
          </div>
          <div className="flex ml-3 h-32 w-32 items-center justify-between rounded-full  border-2 border-l-primary border-t-primary border-b-primary cursor-pointer text-center">
            <span className="m-auto w-fit">Print</span>
          </div>
        </div>
      </Card>
      <Card extra="!p-[20px]  mt-6 w-11/12 h-1/2">
        <div className="flex h-full">
          <div className="flex w-72 flex-col justify-between">
            <div className="">
              <h1 className="text-lg font-semibold">Top 5 Customers</h1>
              <p className="my-3 text-[#545454]">Nov 2023</p>
            </div>
            <p className=" text-[#545454]">SEE ALL</p>
          </div>
          <div></div>
        </div>
      </Card>
    </div>
  );
};

export default TotalSpent;
