import ListItem from "./../components/ListItem";

interface props {
  items: any;
}

function ListView({ items }: props) {
  return (
    <div>
      {items?.map((item: any, index: number) => {
        return <ListItem key={"list-item-" + index} data={item} />;
      })}
    </div>
  );
}

export default ListView;
