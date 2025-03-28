import Item from "./Item";

const ItemList = ({ items, onDelete, onEdit }) => {
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </>
    );
};

export default ItemList;