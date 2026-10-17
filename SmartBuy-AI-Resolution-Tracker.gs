
function onEdit(e) {
  // Stop if there is no edit event
  if (!e || !e.range) return;

  const sheet = e.range.getSheet();

  // Only monitor Sheet1
  if (sheet.getName() !== "Sheet1") return;

  // Only respond to single-cell edits in Status column F
  if (
    e.range.getColumn() !== 6 ||
    e.range.getRow() < 2 ||
    e.range.getNumRows() !== 1 ||
    e.range.getNumColumns() !== 1
  ) return;

  const row = e.range.getRow();
  const status = e.range.getValue();

  const timestampCell = sheet.getRange(row, 7); // Column G
  const resolvedByCell = sheet.getRange(row, 8); // Column H

  if (status === "Resolved") {
    // Record a fixed resolution timestamp
    timestampCell.setValue(new Date());
    timestampCell.setNumberFormat("dd/MM/yyyy HH:mm:ss");

    // Agent enters their name manually in column H
  } else {
    // Clear resolution details if no longer Resolved
    timestampCell.clearContent();
    resolvedByCell.clearContent();
  }
}
