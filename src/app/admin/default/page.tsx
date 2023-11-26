'use client';
import MiniCalendar from 'components/calendar/MiniCalendar';
import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import PieChartCard from 'components/admin/default/PieChartCard';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';

const Dashboard = () => {
  return (
    <div>
      <h1 className="my-9 text-2xl font-medium">Dashboard</h1>

      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Loyal Customers'}
          subtitle={'5,896'}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={'Generated Revenue'}
          subtitle={'32,000,000 TSh'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Redeemed Rewards'}
          subtitle={'89,878'}
        />
      </div>

      {/* Charts */}
      <h1 className="my-9 text-2xl font-medium">Marketplace</h1>

      <div className="flex justify-between">
        <TotalSpent />
        <WeeklyRevenue />
      </div>

      {/* Tables & Charts */}

        <div className="flex w-full justify-between">
          <h1 className="my-9 text-2xl font-medium">Recent Orders</h1>
          <p className=" text-[#545454] my-auto mr-5">SEE ALL</p>
        </div>
        {/* Check Table */}
        <div className='mt-2'>
          <CheckTable tableData={tableDataCheck} />
        </div>
    
    </div>
  );
};

export default Dashboard;
