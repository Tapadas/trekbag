import Button from "../Button";
import { useItemsStore } from "../../stores/itemsStore";

export default function ButtonGroup() {
  const {
    setAllComplete,
    setAllIncomplete,
    resetToInitialItems,
    removeAllItems,
  } = useItemsStore((state) => ({
    setAllComplete: state.setAllComplete,
    setAllIncomplete: state.setAllIncomplete,
    resetToInitialItems: state.resetToInitialItems,
    removeAllItems: state.removeAllItems,
  }));

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      action: setAllComplete,
    },
    {
      text: "Mark all as incomplete",
      action: setAllIncomplete,
    },
    {
      text: "Reset to initial",
      action: resetToInitialItems,
    },
    {
      text: "Remove all items",
      action: removeAllItems,
    },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button, index) => (
        <Button key={index} buttonType="secondary" onClick={button.action}>
          {button.text}
        </Button>
      ))}
    </section>
  );
}
