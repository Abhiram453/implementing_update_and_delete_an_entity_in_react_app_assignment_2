const Item = ({ item, onDelete, onEdit }) => {
    // Render a single item with Delete and Edit buttons
    return (
        <div>
            <span>{item.name}</span>
            <button onClick={() => onEdit(item.id)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
};

export default Item;