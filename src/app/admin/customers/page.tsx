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

const Customers= () => {
  return (
    <div>
      <h1 className="my-9 text-2xl font-medium">Customers</h1>

      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'New Customers'}
          subtitle={'200'}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={'Total Customers'}
          subtitle={'100,000'}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={'Total Upsell'}
          subtitle={'1,000,000'}
        />
      </div>

      {/* Check Table */}
      <div className="mt-7">
        <CheckTable
          tableData={tableDataCheck}
          title={['Loyal Customers', 'Total Spent', 'Phone Number']}
          samples={[
            ['Elizabeth Elisha', '1,000,000 Tsh', '+25566780354'],
            ['Francis Sanga', '5,000,000 Tsh', '+255673580354'],
            ['Jordan Bohari', '2,000,000 Tsh', '+25577685454'],
            ['Juma Mwanaidi', '4,000,000 Tsh', '+255673480354'],
          ]}
        />
      </div>
    </div>
  );
};

export default Customers;
