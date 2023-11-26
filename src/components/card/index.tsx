function Card(props: {
  variant?: string;
  extra?: string;
  children?: JSX.Element | any[];
  isBgBlue?: boolean;
  [x: string]: any;
}) {
  const { variant, extra, children,isBgBlue, ...rest  } = props;
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px]  bg-clip-border shadow-3xl ${
        props.default
          ? 'shadow-shadow-500 dark:shadow-none'
          : 'shadow-shadow-100 dark:shadow-none'
      }  dark:!bg-navy-800 dark:text-white  ${extra}`}
      {...rest}
      style={{
        background:isBgBlue? 'linear-gradient(101deg, #0C37B9 -6.2%, #172E73 101.93%)':'white',
      }}
    >
      {children}
    </div>
  );
}

export default Card;
