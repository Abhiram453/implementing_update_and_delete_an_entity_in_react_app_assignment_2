import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URI);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("error fetching:", error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URI}/${id}`, { method: "DELETE" });
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("error deleting:", error);
    }
  };
  const handleEdit = (id) => {
    console.log("edit item:", id);
  };

  return <ItemList items={items} onDelete={handleDelete} onEdit={handleEdit} />;
}

export default App;