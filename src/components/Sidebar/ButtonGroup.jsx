import Button from "../Button";
import { useItemsContext } from "../../lib/hooks";

export default function ButtonGroup() {
  const {
    handleRemoveAllItems,
    handleSetAllIncomplete,
    handleSetAllComplete,
    handleResetToInitialItems,
  } = useItemsContext();

  const secondaryButtons = [
    {
      text: "Mark all as complete",
      action: handleSetAllComplete,
    },
    {
      text: "Mark all as incomplete",
      action: handleSetAllIncomplete,
    },
    {
      text: "Reset to initial",
      action: handleResetToInitialItems,
    },
    {
      text: "Remove all items",
      action: handleRemoveAllItems,
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
