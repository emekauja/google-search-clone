function HeaderOption({ Icon, title, selected }) {
  return (
    <div
      className={`flex items-center space-x-1 border-b-[3px] border-transparent hover:text-blue-500 pb-3 cursor-pointer ${
        selected && 'text-blue-500 border-blue-500'
      }`}>
      <Icon className="h-4" />
      <p className="hidden sm:inline-flex">{title}</p>
    </div>
  );
}

HeaderOption.getInitialProps = ({ res, err }) => {
  const Icon = res ? res.Icon : err ? err.Icon : 404;
  const title = res ? res.title : err ? err.title : 404;
  const selected = res ? res.selected : err ? err.selected : 404;

  return { Icon, title, selected };
};

export default HeaderOption;
