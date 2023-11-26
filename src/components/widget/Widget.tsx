import Card from "components/card";

const Widget = (props: {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}) => {
  const { icon, title, subtitle } = props;
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full  p-3 dark:bg-navy-700" >
         
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center text-white">
        <p className="font-dm text-sm font-medium ">{title}</p>
        <h4 className="text-xl font-bold ">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
