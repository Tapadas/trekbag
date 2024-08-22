import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleSetAllComplete,
  handleAddItem,
  handleSetAllIncomplete,
  handleResetToInitialItems,
  handleRemoveAllItems,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleSetAllComplete={handleSetAllComplete}
        handleSetAllIncomplete={handleSetAllIncomplete}
        handleResetToInitialItems={handleResetToInitialItems}
        handleRemoveAllItems={handleRemoveAllItems}
      />
    </div>
  );
}
