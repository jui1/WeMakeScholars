console.log("from script file");

const scoff = [
    { id: 1234, violation_type: "Overtime Parking", issue_date_utc: "2022-01-01 12:22:05", fee_in_paisa: 2500, amount_paid: 1000, lpn: "JASON" },
    { id: 4312, violation_type: "Parking on Curb", issue_date_utc: "2022-01-04 11:23:00", fee_in_paisa: 500, amount_paid: 0, lpn: "JASON" },
    { id: 8765, violation_type: "Overtime Parking", issue_date_utc: "2021-12-30 04:33:15", fee_in_paisa: 3500, amount_paid: 0, lpn: "PASSPORT" },
    { id: 8271, violation_type: "Handicap", issue_date_utc: "2021-12-29 22:40:34", fee_in_paisa: 10000, amount_paid: 9000, lpn: "JASON" },
    { id: 8730, violation_type: "Meter Violation", issue_date_utc: "2022-01-02 18:15:01", fee_in_paisa: 1500, amount_paid: 0, lpn: "PASSPORT" },
    { id: 8572, violation_type: "Parking on Curb", issue_date_utc: "2022-01-01 12:45:00", fee_in_paisa: 6500, amount_paid: 0, lpn: "MADDIE" },
    { id: 9183, violation_type: "Parking on Curb", issue_date_utc: "2022-01-01 21:43:14", fee_in_paisa: 300, amount_paid: 0, lpn: "JASON" },
    { id: 5827, violation_type: "Parking on Curb", issue_date_utc: "2021-12-31 20:20:05", fee_in_paisa: 300, amount_paid: 0, lpn: "PASSPORT" },
    { id: 4563, violation_type: "Parking on Curb", issue_date_utc: "2021-12-28 23:45:02", fee_in_paisa: 300, amount_paid: 300, lpn: "PASSPORT" },
  ];
  
  function getList1(data) {
   const totals = {};
    data.forEach(fine => {
      const outstanding = fine.fee_in_paisa - fine.amount_paid;
      totals[fine.lpn] = (totals[fine.lpn] || 0) + outstanding;
    });
    return Object.keys(totals).filter(lpn => totals[lpn] > 5000);
  }
  
  function getList2(data) {
    const openCounts = {};
    data.forEach(fine => {
      const outstanding = fine.fee_in_paisa - fine.amount_paid;
      if (outstanding <= 0) return;
      openCounts[fine.lpn] ??= {};
      openCounts[fine.lpn][fine.violation_type] = (openCounts[fine.lpn][fine.violation_type] || 0) + 1;
    });
    return Object.keys(openCounts).filter(lpn =>
      Object.values(openCounts[lpn]).some(count => count > 2)
    );
  }
  
  console.log("List 1:", getList1(scoff));
  
  console.log("List 2:", getList2(scoff));
