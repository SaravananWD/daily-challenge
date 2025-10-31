function moonPhase(dateString) {
  const REF_DATE = new Date("2000-01-06");
  const targetDate = new Date(dateString);

  const daysDiff =
    Math.floor((targetDate - REF_DATE) / (1000 * 60 * 60 * 24)) + 1;
  const phaseDay = ((((daysDiff - 1) % 28) + 28) % 28) + 1; // Handles negative dates

  const phases = [
    { range: [1, 7], name: "New" },
    { range: [8, 14], name: "Waxing" },
    { range: [15, 21], name: "Full" },
    { range: [22, 28], name: "Waning" },
  ];

  return (
    phases.find(
      (phase) => phaseDay >= phase.range[0] && phaseDay <= phase.range[1]
    )?.name || "Unknown"
  );
}
