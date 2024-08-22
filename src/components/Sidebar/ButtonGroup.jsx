import Button from "../Button";

export default function ButtonGroup({
  handleSetAllComplete,
  handleSetAllIncomplete,
  handleResetToInitialItems,
  handleRemoveAllItems,
}) {
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
      {/* <Button buttonType="secondary" onClick={handleSetAllComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={handleSetAllIncomplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitialItems}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button> */}
    </section>
  );
}
